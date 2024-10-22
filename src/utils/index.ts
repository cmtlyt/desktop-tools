import { getDeviceInfo } from '@cmtlyt/base';
import { createLogger, Kind } from './logger';
import { getPageInfo } from '@/components/sync-page-info';
import { isProd, LOGGER_STORAGE_KEY } from '@/constant';
import { filterForJson } from './filter';
import { addStorageItem, forceSaveStorage } from './storage';
import { ExposeInfo } from '@/types/logger';
import { getUserFingerprint } from './get-user-fingerprint';

type ExtendKind = 'click' | 'appear' | 'todo' | 'event';
export type AllKind = Kind | ExtendKind;

interface LoggerExtendOptions {
  store: {
    exposeCache: ExposeInfo[];
    needExposeKind: AllKind[];
    printToDebug: AllKind[];
    getLoggerBaseInfo: () => Record<string, unknown>;
    messagesHandler: (oriMsgs: unknown[]) => void;
    exposeHandler: (info: ExposeInfo) => void;
  };
}

const logger = createLogger<ExtendKind, LoggerExtendOptions>({
  needTrace: !isProd,
  logConfig: {
    click: { kind: 'click', inherit: 'info' },
    event: { kind: 'event', inherit: 'info' },
    appear: { kind: 'appear', inherit: 'info', needTrace: false },
    todo: { kind: 'todo', inherit: 'warn', needTrace: true },
    error: { kind: 'error', needTrace: true },
  },
  store: {
    exposeCache: [],
    needExposeKind: ['click', 'appear', 'error', 'event'],
    printToDebug: ['click', 'appear', 'debug', 'event'],
    getLoggerBaseInfo() {
      return { pageInfo: getPageInfo(), userFingerprint: getUserFingerprint(), deviceInfo: getDeviceInfo() };
    },
    messagesHandler(oriMsgs: unknown[]) {
      if (typeof oriMsgs[0] !== 'string') throw new TypeError('action is not a string');
      const loggerInfo = this.getLoggerBaseInfo();
      oriMsgs.push(loggerInfo);
      const messages = [...oriMsgs];
      oriMsgs.length = 0;
      oriMsgs.push(...filterForJson(messages));
    },
    exposeHandler(info) {
      const { exposeCache } = this;
      exposeCache.push(info);
      if (exposeCache.length >= 10) {
        addStorageItem(LOGGER_STORAGE_KEY, exposeCache.splice(0), false);
        forceSaveStorage();
      }
    },
  },
  // 生产环境下不在控制台输出
  printFunc: isProd ? () => {} : null,
  getPrintFunc(kind) {
    const { printToDebug } = this.store;
    if (printToDebug.includes(kind)) {
      return (...args) => console.debug(...args);
    }
    return (...args) => console.log(...args);
  },
  onLogBefore(e) {
    const { needExposeKind } = this.store;
    const { kind } = e;
    if (needExposeKind.includes(kind)) {
      try {
        this.store.messagesHandler(e.messages);
      } catch (err) {
        logger.error('logger.store.messagesHandler', { err, messages: e.messages, kind });
      }
      this.store.exposeHandler({ kind, info: e.messages, time: Date.now() });
      if (isProd) {
        e.preventDefault();
        // TODO: 线上日志上报
      }
    }
  },
});

export { logger, getPageInfo, getUserFingerprint };
export * from './filter';
export * from './storage';
export * from './array';

window.logger = {
  debug: logger.debug,
  info: logger.info,
  todo: logger.todo,
};
