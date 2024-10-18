import { useMemo, useRef, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { DatePicker, Drawer, Form, Input, Popconfirm, Select } from 'antd';
import styled from 'styled-components';
import { debounce } from '@cmtlyt/base';
import { LOGGER_STORAGE_KEY } from '@/constant';
import { AllKind, forceSaveStorage, getStorageItem, logger, removeStorageItem, reverse } from '@/utils';
import { AppearBox } from '@/components/appear-box';
import { ExposeInfo } from '@/types/logger';
import { Button, FlexAlign, FlexBox, FlexDirection, ShadowFlexBox, Tag } from '@/components/base';
import { DateView } from '@/components/date-view';
import { getLayoutStore } from '@/store';

const LogWrapper = styled(ShadowFlexBox)`
  padding: 1rem 1.4rem;
  border-radius: var(--radius-base);
`;

const ActionSpan = styled.span`
  white-space: nowrap;
`;

const DateSpan = styled(DateView)`
  white-space: nowrap;
`;

interface LogItemProps extends ExposeInfo {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function LogItem(props: LogItemProps) {
  const {
    kind,
    time,
    info: [action, ...info],
    onClick,
  } = props;

  const { pageInfo } = (info as Record<string, unknown>[]).find((item) => 'pageInfo' in item) || {};

  return (
    <LogWrapper $gap="1" onClick={onClick}>
      <Tag>{kind}</Tag>
      <ActionSpan>{String(action)}</ActionSpan>
      <DateSpan date={time} format="yyyy-MM-DD hh:mm:ss" />
      <div>{JSON.stringify(pageInfo, null, 1)}</div>
    </LogWrapper>
  );
}

const PageWrapper = styled(FlexBox)`
  padding: 1rem;
  overflow-y: auto;
`;

interface FilterInfo {
  kinds?: AllKind[];
  action?: string;
  timeRange?: [number, number];
}

interface FilterBarProps {
  filterInfo?: FilterInfo;
  includedKinds?: AllKind[];
  onChange?: (info: FilterInfo) => void;
}

const FieldWrapper = styled(Form.Item)`
  margin-bottom: 0;
  flex: 1;
`;

const FilterWrapper = styled(FlexBox)`
  padding: 1rem 1rem;
`;

function FilterBar(props: FilterBarProps) {
  const { filterInfo, includedKinds, onChange } = props;

  const kindOptions = useRef([
    { label: '全部', value: '' },
    ...(includedKinds?.map((kind) => ({ label: kind, value: kind })) || []),
  ]);

  const onValuesChange = debounce((data: FilterInfo) => {
    const { kinds, action, timeRange } = data;
    const temp = { ...filterInfo, action, kinds };
    if (kinds && kinds.length > 1) temp.kinds = kinds.filter(Boolean);
    if (timeRange) temp.timeRange = [+timeRange[0], +timeRange[1]];
    onChange?.(temp);
  }, 400);

  return (
    <Form autoComplete="off" initialValues={filterInfo} onValuesChange={onValuesChange}>
      <FilterWrapper $gap="1">
        <FieldWrapper name="kinds" label="类型">
          <Select options={kindOptions.current} mode="multiple" optionFilterProp="label" />
        </FieldWrapper>
        <FieldWrapper name="action" label="行为">
          <Input placeholder="请输入行为" />
        </FieldWrapper>
        <FieldWrapper name="timeRange" label="时间">
          <DatePicker.RangePicker showTime />
        </FieldWrapper>
      </FilterWrapper>
    </Form>
  );
}

const InfoContent = styled.pre`
  padding: 1rem;
  background-color: var(--color-gray-3);
  border-radius: var(--radius-base);
  white-space: pre-wrap;
  overflow-x: auto;
`;

interface LogDetailProps {
  kind: AllKind;
  action: string;
  time: number;
  info: unknown[];
}

const LogDetailLabel = styled.span`
  margin-right: 1em;
`;

function LogDetail(props: LogDetailProps) {
  const { kind, action, time, info } = props;
  return (
    <FlexBox $gap="1" $direction={FlexDirection.column}>
      <FlexBox $alignItems={FlexAlign.center}>
        <LogDetailLabel>Kind: </LogDetailLabel>
        <Tag>{kind}</Tag>
      </FlexBox>
      <FlexBox $alignItems={FlexAlign.center}>
        <LogDetailLabel>Action: </LogDetailLabel>
        <Tag>{String(action)}</Tag>
      </FlexBox>
      <FlexBox $alignItems={FlexAlign.center}>
        <LogDetailLabel>Time: </LogDetailLabel>
        <Tag>
          <DateSpan date={time} format="yyyy-MM-DD hh:mm:ss" />
        </Tag>
      </FlexBox>
      <FlexBox $flex="1" $direction={FlexDirection.column}>
        <LogDetailLabel>Info:</LogDetailLabel>
        <InfoContent>{JSON.stringify(info, null, 2)}</InfoContent>
      </FlexBox>
    </FlexBox>
  );
}

export function Component() {
  const { history, includedKinds } = useLoaderData() as LoaderData;
  const [filterInfo, setFilterInfo] = useState<FilterInfo>({ kinds: ['' as AllKind] });
  const [logDetail, setLogDetail] = useState<ExposeInfo | null>(null);

  const reverseHistory = useMemo(() => reverse(history), [history]);
  const filteredHistory = useMemo(() => {
    return reverseHistory.filter((item) => {
      const {
        kind,
        time,
        info: [action],
      } = item;
      const { kinds, action: filterAction, timeRange } = filterInfo;
      const filterKinds = kinds?.filter(Boolean);
      if (filterKinds?.length && !filterKinds.includes(kind)) return false;
      if (filterAction && !String(action).includes(filterAction)) return false;
      if (timeRange) {
        const [start, end] = timeRange;
        if (time < start || time > end) return;
      }
      return true;
    });
  }, [reverseHistory, filterInfo]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('log-history')}>
      <FlexBox $direction={FlexDirection.column} style={{ height: '100%' }}>
        <FilterBar filterInfo={filterInfo} includedKinds={includedKinds} onChange={(info) => setFilterInfo(info)} />
        <PageWrapper $direction={FlexDirection.column} $gap="1" $flex="1">
          {filteredHistory.map((item, idx) => (
            <LogItem key={idx} {...item} onClick={() => setLogDetail(item)} />
          ))}
        </PageWrapper>
      </FlexBox>
      <Drawer open={!!logDetail} title="日志详情" width="50%" onClose={() => setLogDetail(null)}>
        {logDetail && <LogDetail {...logDetail} action={String(logDetail.info[0])} />}
      </Drawer>
    </AppearBox>
  );
}

function PageRightButtonArea() {
  const navigate = useNavigate();

  return (
    <Popconfirm
      title="确认清空日志吗?"
      okText="确认"
      cancelText="取消"
      onConfirm={async () => {
        await removeStorageItem(LOGGER_STORAGE_KEY);
        forceSaveStorage();
        logger.click('log-history-clear-ok');
        getLayoutStore().showMessage({
          type: 'success',
          content: '清空日志成功',
          onClose() {
            navigate('/log-history');
          },
        });
      }}
      onCancel={() => logger.click('log-history-clear-cancel')}
    >
      <Button>清空日志</Button>
    </Popconfirm>
  );
}

export const handle = {
  title: '日志记录',
  rightArea: <PageRightButtonArea />,
};

interface LoaderData {
  history: ExposeInfo[];
  includedKinds: AllKind[];
}

export async function loader() {
  const history: ExposeInfo[] = (await getStorageItem(LOGGER_STORAGE_KEY)) || [];
  const includedKinds = [...new Set(history.map((item) => item.kind))];
  return { history, includedKinds };
}
