import { useEffect, useState } from 'react';
import { PageInfo } from '@/types/page-info';
import { RightArea } from './right-area';
import { useRecordStoreSlice } from '../store';
import { getPlayUrl } from './util';
import { Switch } from '@/components/switch';
import { Empty } from '@/components/empty';
import { logger } from '@/utils';

export function Component() {
  const { currentRecord } = useRecordStoreSlice('currentRecord');
  const [playUrl, setPlayUrl] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const playUrl = await getPlayUrl(currentRecord);
        setPlayUrl(playUrl);
      } catch (e) {
        logger.error('get-play-url', e);
      }
    })();
  }, [currentRecord]);

  return (
    <Switch if={!!playUrl} fullback={<Empty />}>
      {() => <video src={playUrl} controls />}
    </Switch>
  );
}

export const handle: PageInfo = {
  title: '回放',
  needBackIcon: true,
  rightArea: <RightArea />,
};
