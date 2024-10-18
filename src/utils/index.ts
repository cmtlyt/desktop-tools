import { createLogger, Kind } from './logger';
import { getPageInfo } from '@/components/sync-page-info';
import { isProd, LOGGER_STORAGE_KEY } from '@/constant';
import { filterForJson } from './filter';
import { addStorageItem, forceSaveStorage } from './storage';
import { ExposeInfo } from '@/types/logger';

type ExtendKind = 'click' | 'appear' | 'todo' | 'event';
export type AllKind = Kind | ExtendKind;

interface LoggerExtendOptions {
  store: {
    exposeCache: ExposeInfo[];
    needExposeKind: AllKind[];
    printToDebug: AllKind[];
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
    messagesHandler(oriMsgs: unknown[]) {
      const pageInfo = getPageInfo();
      oriMsgs.push(pageInfo);
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
    const { needExposeKind, messagesHandler } = this.store;
    const { kind } = e;
    if (needExposeKind.includes(kind)) {
      messagesHandler(e.messages);
      this.store.exposeHandler({ kind, info: e.messages, time: Date.now() });
      if (isProd) {
        e.preventDefault();
        // TODO: 线上日志上报
      }
    }
  },
});

export { logger, getPageInfo };
export * from './filter';
export * from './storage';
export * from './array';

window.logger = {
  debug: logger.debug,
  info: logger.info,
  todo: logger.todo,
};
