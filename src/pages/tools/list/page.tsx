import { useCallback, useEffect, useState } from 'react';
import { Input, Modal } from 'antd';
import { hash } from 'ohash';
import styled from 'styled-components';
import { toolList } from './constant';
import { PRIVATE_TOOLS_KEY, SHOW_PRIVATE_PASSWORD } from '../constant';
import { AppList } from '@/components/app-list';
import { ButtonTheme, FlexBox } from '@/components/base';
import { AppearBox } from '@/components/appear-box';
import { isPhone, logger } from '@/utils';
import { useCommand } from '@/hooks';
import { getKeyStore, useKeyStoreSlice } from '@/store';
import { PageInfo } from '@/types/page-info';
import { ButtonList } from '@/components/button-list';

const Wrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

export function Component() {
  const [showPrivateTools, setShowPrivateTools] = useState(false);
  const { keys } = useKeyStoreSlice('keys');

  useEffect(() => {
    setShowPrivateTools(getKeyStore().has(PRIVATE_TOOLS_KEY));
  }, [keys]);

  useCommand(
    useCallback((command, metadata = {}) => {
      if (command === 'showPrivateTools' && hash(metadata.password) === SHOW_PRIVATE_PASSWORD) {
        getKeyStore().add(PRIVATE_TOOLS_KEY);
        setShowPrivateTools(true);
      }
    }, []),
  );

  return (
    <AppearBox onFirstAppear={() => logger.appear('tool-list')}>
      <Wrapper>
        <AppList
          appListHander={() =>
            toolList
              .filter((item) => !item.private || showPrivateTools)
              .map((item) => ({
                ...item,
                contentStyle: { width: '10rem', height: '10rem' },
                iconStyle: { fontSize: '8rem' },
                labelStyle: { fontSize: '1.8rem' },
              }))
          }
        />
      </Wrapper>
    </AppearBox>
  );
}

function PassCheckModal(props: { visible: boolean; onClose: () => void }) {
  const { visible, onClose } = props;
  const [password, setPassword] = useState('');

  const handleOk = () => {
    if (hash(password) === SHOW_PRIVATE_PASSWORD) {
      getKeyStore().add(PRIVATE_TOOLS_KEY);
    }
    onClose();
  };
  return (
    <Modal open={visible} title="输入密码" onOk={handleOk} onCancel={onClose}>
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </Modal>
  );
}

function RightArea() {
  const [showPassCheckModal, setShowPassCheckModal] = useState(false);

  return (
    <>
      <PassCheckModal visible={showPassCheckModal} onClose={() => setShowPassCheckModal(false)} />
      <ButtonList
        buttons={[
          {
            text: '显示私有工具',
            $presetTheme: ButtonTheme.INFO,
            hidden: !isPhone(),
            onClick: () => setShowPassCheckModal(true),
          },
        ]}
      />
    </>
  );
}

export const handle: PageInfo = {
  title: '工具列表',
  crumbLabel: '列表',
  rightArea: <RightArea />,
};
