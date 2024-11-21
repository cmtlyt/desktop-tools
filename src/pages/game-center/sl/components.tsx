import { memo, useEffect, useState } from 'react';
import { PointerEvent } from 'leafer-ui';
import styled from 'styled-components';
import { MdFlip } from 'react-icons/md';
import { PiFlagPennantFill } from 'react-icons/pi';
import { LuRadar } from 'react-icons/lu';
import { FaQuestion } from 'react-icons/fa6';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { emitSLAction, SLActionType, useSubscribeSLAction } from './subject';
import { Show } from '@/components/show';
import { BlockStatus, FinishedBlock, GameInfo } from './type';
import { Button, ButtonTheme, FlexBox, FlexJustify, ShadowFlexBox } from '@/components/base';
import { isEmptyBlock, probeAround } from './util';
import { Drawer } from '@/components/drawer';
import { Form, InputNumber } from 'antd';
import { logger } from '@/utils';

type EventCallback = (type?: string) => void;

interface EventInfo {
  block: FinishedBlock;
  gameInfo: GameInfo;
  callback: EventCallback;
}

const IconWrapper = styled(ShadowFlexBox)`
  padding: 1rem;
  border-radius: var(--radius-full);
  font-size: 2rem;

  &:empty {
    display: none;
  }
`;

function getIcon(status?: BlockStatus) {
  switch (status) {
    case BlockStatus.unopen:
      return <PiFlagPennantFill />;
    case BlockStatus.flag:
      return <FaQuestion />;
    case BlockStatus.question:
      return <TbWashDrycleanOff />;
    case BlockStatus.open:
    case undefined:
      return null;
    default:
      status satisfies never;
      return null;
  }
}

const ControllerWrapper = styled(FlexBox)`
  position: absolute;
  left: 50%;
  bottom: 5rem;
  transform: translateX(-50%);
`;

export const PhoneController = memo(function PhoneController() {
  const [showController, setShowController] = useState(false);
  const [eventInfo, setEventInfo] = useState(null as unknown as EventInfo);

  useSubscribeSLAction(({ ext = {} }) => {
    const { eventCallback, block, gameInfo } = ext;
    if (!eventCallback || !block || !gameInfo) return setShowController(false);
    setEventInfo({ callback: eventCallback, block, gameInfo });
    setShowController(true);
  }, SLActionType.PHONE_HANDLER);

  const probeHandler = () => {
    const { block, gameInfo, callback } = eventInfo;
    if (!block || !gameInfo || !callback) return;
    probeAround(block, gameInfo);
    callback();
  };

  return (
    <Show when={showController}>
      {() => (
        <ControllerWrapper $gap="1" onClick={() => setShowController(false)}>
          <IconWrapper onClick={() => eventInfo?.callback?.(PointerEvent.TAP)}>
            {eventInfo?.block?.status === BlockStatus.unopen && <MdFlip />}
          </IconWrapper>
          <IconWrapper onClick={() => eventInfo?.callback?.(PointerEvent.MENU_TAP)}>
            {getIcon(eventInfo?.block?.status)}
          </IconWrapper>
          <IconWrapper onClick={probeHandler}>
            {eventInfo?.block?.status === BlockStatus.open && !isEmptyBlock(eventInfo?.block) && <LuRadar />}
          </IconWrapper>
        </ControllerWrapper>
      )}
    </Show>
  );
});

const Text = styled.span`
  padding: 1rem;
  font-size: 2rem;
`;

interface GameInfoProps {
  gameInfo: React.MutableRefObject<GameInfo>;
}

export function GameInfoBox(props: GameInfoProps) {
  const { gameInfo } = props;
  const [time, setTime] = useState(0);

  useSubscribeSLAction(() => setTime(0), SLActionType.RESTART);

  useEffect(() => {
    if (gameInfo.current.status === 'over') return;
    const timer = setInterval(() => setTime((time) => time + 1), 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameInfo.current.status]);

  return (
    <FlexBox $justifyContent={FlexJustify.CENTER}>
      <Text>剩余雷数: {gameInfo.current.mineTotal - gameInfo.current.userMiniCount}</Text>
      <Text>用时: {time}</Text>
    </FlexBox>
  );
}

const InputNumberField = styled(InputNumber)`
  width: 100%;
`;

interface GameConfigDrawerProps {
  gameInfo: React.MutableRefObject<GameInfo>;
}

export function GameConfigDrawer(props: GameConfigDrawerProps) {
  const { gameInfo } = props;
  const [showConfig, setShowConfig] = useState(false);
  const [form] = Form.useForm();

  useSubscribeSLAction(() => setShowConfig(true), SLActionType.CHANGE_CONFIG);

  return (
    <Drawer title="游戏配置" open={showConfig} onClose={() => setShowConfig(false)}>
      <Form
        form={form}
        initialValues={{ row: gameInfo.current.row, col: gameInfo.current.col, mineTotal: gameInfo.current.mineTotal }}
        onFinish={(values) => {
          form.validateFields().then(() => {
            gameInfo.current = { ...gameInfo.current, ...values };
            emitSLAction({ id: 'sl-config-change', type: SLActionType.RESTART });
            logger.event('sl-config-change', values);
            setShowConfig(false);
          });
        }}
      >
        <Form.Item label="行数" name="row">
          <InputNumberField min={10} max={100} />
        </Form.Item>
        <Form.Item label="列数" name="col">
          <InputNumberField min={10} max={100} />
        </Form.Item>
        <Form.Item
          label="雷数"
          name="mineTotal"
          rules={[
            {
              async validator(_, mineTotal) {
                const { row, col } = form.getFieldsValue();
                if (mineTotal > row * col) throw new Error(`雷数不能超过${row * col}`);
              },
            },
          ]}
        >
          <InputNumberField min={10} />
        </Form.Item>
        <Form.Item>
          <FlexBox $gap="1">
            <Button $presetTheme={ButtonTheme.PRIMARY}>确定</Button>
            <Button onClick={() => setShowConfig(false)}>取消</Button>
          </FlexBox>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
