import { getDeviceInfo, noop } from '@cmtlyt/base';
import { createMonitor, Kind } from '@cmtlyt/monitor';
import { getPageInfo } from '@/components/sync-page-info';
import { IS_PROD, LOGGER_STORAGE_KEY } from '@/constant';
import { filterForJson } from './filter';
import { addStorageItem, forceSaveStorage } from './storage';
import { ExposeInfo } from '@/types/logger';
import { getUserFingerprint } from './get-user-fingerprint';

type ExtendKind = 'click' | 'appear' | 'todo' | 'event' | 'expose';
export type AllKind = Kind | ExtendKind;

interface LoggerExtendOptions {
  store: {
    exposeCache: ExposeInfo[];
    needExposeKind: AllKind[];
    printToDebug: AllKind[];
    ignorePrint: AllKind[];
    getLoggerBaseInfo: () => Record<string, unknown>;
    messagesHandler: (oriMsgs: unknown[]) => void;
    exposeHandler: (info: ExposeInfo) => void;
    expose: () => void;
  };
}

const logger = createMonitor<ExtendKind, LoggerExtendOptions>({
  loggerOptions: {
    needTrace: !IS_PROD,
    logConfig: {
      systemError: { kind: 'systemError', inherit: 'error' },
      system: { kind: 'system', inherit: 'info' },
      click: { kind: 'click', inherit: 'info' },
      event: { kind: 'event', inherit: 'info' },
      appear: { kind: 'appear', inherit: 'info', needTrace: false },
      todo: { kind: 'todo', inherit: 'warn', needTrace: true },
      error: { kind: 'error', needTrace: true },
      expose: { kind: 'expose', inherit: 'info', needTrace: false },
    },
    // 生产环境下不在控制台输出
    printFunc: IS_PROD ? noop : null,
    getPrintFunc(kind) {
      const { printToDebug, ignorePrint } = this.store;
      if (ignorePrint.includes(kind)) return noop;
      if (printToDebug.includes(kind)) {
        return (...args) => console.debug(...args);
      }
      return (...args) => console.log(...args);
    },
  },
  store: {
    exposeCache: [],
    needExposeKind: ['click', 'appear', 'error', 'event', 'expose', 'system'],
    printToDebug: ['click', 'appear', 'debug', 'event', 'system'],
    ignorePrint: ['appear', 'system'],
    getLoggerBaseInfo() {
      return { pageInfo: getPageInfo(), userFingerprint: getUserFingerprint(), deviceInfo: getDeviceInfo() };
    },
    messagesHandler(oriMsgs) {
      if (typeof oriMsgs[0] !== 'string') throw new TypeError('action is not a string');
      const loggerInfo = this.getLoggerBaseInfo();
      oriMsgs.push(loggerInfo);
      const messages = [...oriMsgs];
      oriMsgs.length = 0;
      oriMsgs.push(...filterForJson(messages));
    },
    async expose() {
      const { exposeCache } = this;
      await addStorageItem(LOGGER_STORAGE_KEY, exposeCache.splice(0), false);
      forceSaveStorage();
    },
    exposeHandler(info) {
      const { exposeCache } = this;
      exposeCache.push(info);
      if (exposeCache.length >= 10 || info.kind === 'expose') this.expose();
    },
  },
  formatLogInfo(info) {
    return info.logInfo;
  },
  reportStrategy(info) {
    const { needExposeKind } = this.store;
    const { kind } = info;
    return needExposeKind.includes(kind);
  },
  formatReportInfo(info) {
    try {
      this.store.messagesHandler(info.messages);
    } catch (err) {
      const { kind, messages } = info;
      logger.error('logger.store.messagesHandler', { err: (err as Error).stack, messages, kind });
    }
    return info;
  },
  reportLog(info) {
    const { kind } = info;
    this.store.exposeHandler({ kind, info: info.messages, time: Date.now() });
    if (IS_PROD) {
      info.preventDefault();
      // TODO: 线上日志上报
    }
  },
});

export { logger, getPageInfo, getUserFingerprint };
export * from './filter';
export * from './storage';
export * from './array';
export * from './create-persist';
export * from './create-store-helper';
export * from './create-action-subscribe-hook';
export * from './is-phone';
export * from './opfs';

window.logger = {
  debug: logger.debug,
  info: logger.info,
  todo: logger.todo,
};
