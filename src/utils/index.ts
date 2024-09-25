import { createLogger } from './logger';

const logger = createLogger({
  onLogBefore(e) {
    if (e.kind === 'error') {
      e.preventDefault();
      // TODO: 上报日志
    }
  },
});

export { logger };
