import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

export function Component() {
  return <AppearBox onFirstAppear={() => logger.appear('game-sbwd')}>十步万度</AppearBox>;
}

export const handle = {
  title: '十步万度',
  needBackIcon: true,
};
