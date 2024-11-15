import { useEffect, useState } from 'react';
import { PageInfo } from '@/types/page-info';
import { RightArea } from './right-area';
import { useRecordStoreSlice } from '../store';
import { getPlayUrl } from './util';
import { Switch } from '@/components/switch';
import { Empty } from '@/components/empty';
import { logger } from '@/utils';
import { TitleArea } from './title-area';
import { AppearBox } from '@/components/appear-box';

export function Component() {
  const { currentRecord } = useRecordStoreSlice('currentRecord');
  const [playUrl, setPlayUrl] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const playUrl = await getPlayUrl(currentRecord);
        setPlayUrl(playUrl);
      } catch (e) {
        logger.error('get-play-url', (e as Error).message);
      }
    })();
  }, [currentRecord]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('playback')}>
      <Switch if={!!playUrl} fullback={<Empty />}>
        {() => <video src={playUrl} controls />}
      </Switch>
    </AppearBox>
  );
}

export const handle: PageInfo = {
  title: '回放',
  needBackIcon: true,
  rightArea: <RightArea />,
  titleArea: <TitleArea />,
};
