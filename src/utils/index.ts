import { createLogger, Kind } from './logger';
import { getPageInfo } from '@/components/sync-page-info';
import { isProd } from '@/constant';

type ExtendKind = 'click' | 'appear' | 'todo';
type AllKind = Kind | ExtendKind;

interface LoggerExtendOptions {
  store: {
    needExposeKind: AllKind[];
    printToDebug: AllKind[];
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
      const pageInfo = getPageInfo();
      e.messages.push(pageInfo);
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
