import { AppearBox } from '@/components/appear-box';
import { FlexBox } from '@/components/base';
import { Link } from '@/components/link';
import { Message } from '@/components/message';
import { BASENAME } from '@/router';
import { useLayoutStoreSlice } from '@/store';
import { PageInfo } from '@/types/page-info';
import { logger } from '@/utils';
import { callBridgeApi } from '@/utils/bridge-api';
import { clipboard } from '@cmtlyt/base';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const GuideContainer = styled(FlexBox)`
  height: 100%;
`;

export function Component() {
  const [searchParams] = useSearchParams();
  const { showMessage } = useLayoutStoreSlice('showMessage');

  const supportCopy = clipboard.isCopyable;

  const target = searchParams.get('target');
  const toOrigin = searchParams.get('toOrigin');

  const pageInfo = useMemo(() => {
    return JSON.parse(searchParams.get('pageInfo') || '{}') as PageInfo;
  }, [searchParams]);

  // 获取来源页面
  const referer = useMemo(() => {
    const temp = searchParams.get('referer');
    if (temp === target) return '/';
    return temp || '/';
  }, [target, searchParams]);

  const finishedTarget = useMemo(() => {
    return `${toOrigin || `https://cmtlyt.github.io${BASENAME}`}#${target}`;
  }, [target, toOrigin]);

  const gotoBrowser = () => {
    logger.click('guide-goto-browser', { finishedTarget, pageInfo });
    clipboard.copy(finishedTarget);
    showMessage({ content: '链接已复制到剪切板', type: 'success' });
    callBridgeApi('openBrowser', finishedTarget);
  };

  return (
    <AppearBox onFirstAppear={() => logger.appear('guide')}>
      <Message />
      <GuideContainer $direction="column" $alignItems="center" $justifyContent="center" $gap="1em">
        <span>{pageInfo.title || '引导'}页面</span>
        {supportCopy ? (
          <span onClick={gotoBrowser}>前往浏览器查看</span>
        ) : (
          <section>
            <span>您的环境不支持复制, 请手动复制链接</span>
            <span>{finishedTarget}</span>
          </section>
        )}
        <Link to={referer}>返回</Link>
      </GuideContainer>
    </AppearBox>
  );
}
