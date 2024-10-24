import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useDetailStoreSlice } from './store';
import { ButtonList } from '@/components/button-list';
import { FlowForm, PageStatus } from '../flow-form';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { FlexBox } from '@/components/base';

interface LoaderData {
  id: string;
}

const DetailWrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

export function Component() {
  const { id } = useLoaderData() as LoaderData;
  const { setId: setDetailId } = useDetailStoreSlice('setId');

  useEffect(() => {
    setDetailId(id);
  }, [id, setDetailId]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('flow-detail', { id })}>
      <DetailWrapper>
        <FlowForm pageStatus={PageStatus.VIEW} />
      </DetailWrapper>
    </AppearBox>
  );
}

interface LoaderParams {
  params: Params;
}

interface Params {
  id: string;
}

export async function loader({ params }: LoaderParams): Promise<LoaderData> {
  return {
    id: params.id,
  };
}

function FlowDetailButtonArea() {
  const { id } = useDetailStoreSlice('id');

  return <ButtonList buttons={[{ text: '编辑', to: `/flow/editor/${id}` }]} />;
}

export const handle = {
  title: '流水详情',
  crumbLabel: '详情',
  needBackIcon: true,
  rightArea: <FlowDetailButtonArea />,
};
