import { getNow } from '@cmtlyt/base';
import { createLogger, Kind } from './logger';
import { getPageInfo } from '@/components/sync-page-info';
import { isProd } from '@/constant';

type ExtendKind = 'click' | 'appear' | 'todo';
type AllKind = Kind | ExtendKind;

interface LoggerExtendOptions {
  store: {
    needExposeKind: AllKind[];
    logCache: Partial<Record<AllKind, number>>;
    checkCache(kind: AllKind): boolean;
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
    logCache: {},
    checkCache(kind: AllKind) {
      const lastCall = this.logCache[kind] || 0;
      const curNow = getNow();
      this.logCache[kind] = curNow;
      return curNow - lastCall < 10;
    },
  },
  onLogBefore(e) {
    const { needExposeKind } = this.store;
    const { kind } = e;
    // 排除页面短时间内多次渲染造成的日志重复, 也有一定几率存在日志丢失的情况
    if (this.store.checkCache(kind)) {
      e.preventDefault();
      return;
    }
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
  debug: logger.debug.bind(logger),
  info: logger.info.bind(logger),
  todo: logger.todo.bind(logger),
};
