import { useState } from 'react';
import { PointerEvent } from 'leafer-ui';
import styled from 'styled-components';
import { MdFlip } from 'react-icons/md';
import { PiFlagPennantFill } from 'react-icons/pi';
import { FaQuestion } from 'react-icons/fa6';
import { TbWashDrycleanOff } from 'react-icons/tb';
import { SLActionType, useSubscribeSLAction } from './subject';
import { Show } from '@/components/show';
import { BlockStatus, FinishedBlock, GameInfo } from './type';
import { FlexBox, ShadowFlexBox } from '@/components/base';

type EventCallback = (type: string) => void;

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

export function PhoneController() {
  const [showController, setShowController] = useState(false);
  const [eventInfo, setEventInfo] = useState(null as unknown as EventInfo);

  useSubscribeSLAction(({ ext = {} }) => {
    const { eventCallback, block, gameInfo } = ext;
    if (!eventCallback || !block || !gameInfo) return setShowController(false);
    setEventInfo({ callback: eventCallback, block, gameInfo });
    setShowController(true);
  }, SLActionType.PHONE_HANDLER);

  return (
    <Show if={showController}>
      <ControllerWrapper $gap="1" onClick={() => setShowController(false)}>
        <IconWrapper onClick={() => eventInfo?.callback?.(PointerEvent.TAP)}>
          <MdFlip />
        </IconWrapper>
        <IconWrapper onClick={() => eventInfo?.callback?.(PointerEvent.MENU_TAP)}>
          {getIcon(eventInfo?.block?.status)}
        </IconWrapper>
      </ControllerWrapper>
    </Show>
  );
}
