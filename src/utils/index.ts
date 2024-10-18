import { createLogger, Kind } from './logger';
import { getPageInfo } from '@/components/sync-page-info';
import { isProd } from '@/constant';
import { filterForJson } from './filter';

type ExtendKind = 'click' | 'appear' | 'todo';
type AllKind = Kind | ExtendKind;

interface LoggerExtendOptions {
  store: {
    needExposeKind: AllKind[];
    printToDebug: AllKind[];
    messagesHandler: (oriMsgs: unknown[]) => void;
  };
}

const logger = createLogger<ExtendKind, LoggerExtendOptions>({
  needTrace: !isProd,
  logConfig: {
    click: { kind: 'click', inherit: 'info' },
    appear: { kind: 'appear', inherit: 'info', needTrace: false },
    todo: { kind: 'todo', inherit: 'warn', needTrace: true },
    error: { kind: 'error', needTrace: true },
  },
  store: {
    needExposeKind: ['click', 'appear', 'error'],
    printToDebug: ['click', 'appear', 'debug'],
    messagesHandler(oriMsgs: unknown[]) {
      const pageInfo = getPageInfo();
      oriMsgs.push(pageInfo);
      const messages = [...oriMsgs];
      oriMsgs.length = 0;
      oriMsgs.push(...filterForJson(messages));
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
      if (isProd) {
        e.preventDefault();
        // TODO: 上报日志
      }
    }
  },
});

export { logger, getPageInfo };
export * from './filter';

window.logger = {
  debug: logger.debug,
  info: logger.info,
  todo: logger.todo,
};
