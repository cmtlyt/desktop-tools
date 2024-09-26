import { createLogger } from './logger';
import { isProd } from '@/constant';

const logger = createLogger({
  onLogBefore(e) {
    if (e.kind === 'error' && isProd) {
      e.preventDefault();
      // TODO: 上报日志
    }
  },
});

export { logger };
