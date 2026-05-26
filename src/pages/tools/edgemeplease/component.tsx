import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Show } from '@pzui/react';

/* ===== 设置表单 ===== */
export const SetupForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 420px;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #ccc;
  letter-spacing: 0.5px;
`;

export const Select = styled.select`
  background: #1a1a2e;
  color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  &:focus {
    border-color: #e94560;
  }
`;

export const StartButton = styled.button`
  background: linear-gradient(135deg, #e94560, #c23152);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 32px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 2px;
  transition: transform 0.15s, box-shadow 0.15s;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 20px rgba(233, 69, 96, 0.5);
  }
  &:active {
    transform: scale(0.96);
  }
`;

/* ===== 游戏 UI ===== */
export const PageWrapper = styled.div<{ $wc?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: 24px;
  background: ${(props) =>
    props.$wc === 'finish' ? '#003300' :
    props.$wc === 'cancel' ? '#330000' :
    props.$wc === 'stop' ? '#330000' :
    '#000'};
  color: #fff;
  font-family: -apple-system, 'Segoe UI', system-ui, sans-serif;
  font-size: 18px;
  transition: background 0.3s;
`;

export const GameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const MessageText = styled.div`
  font-size: 44px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 30px 0;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flashAnim = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
`;

export const FlashIndicator = styled.div<{ $on: boolean; $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${(props) => (props.$on ? '#ff2200' : '#222')};
  color: ${(props) => (props.$on ? '#fff' : '#555')};
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 24px;
  animation: ${flashAnim} ${(props) => (props.$on ? '0.2s' : '0s')};
  transition: background 0.1s;
  user-select: none;
`;

export const ProgressBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  border: 2px solid #555;
  border-radius: 6px;
  overflow: hidden;
  background: #111;
  margin-bottom: 12px;
`;

export const EdgeZone = styled.div`
  position: relative;
  height: 100%;
  flex: 0 0 75%;
  overflow: hidden;
`;

export const EdgeFill = styled.div<{ $width: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.$width}%;
  background: #00cc00;
  transition: width 0.1s linear;
`;

export const CumZone = styled.div<{ $show: boolean }>`
  position: relative;
  height: 100%;
  flex: 0 0 ${(props) => (props.$show ? '25%' : '0')};
  overflow: hidden;
  transition: flex 0.2s;
`;

export const CumFill = styled.div<{ $width: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.$width}%;
  background: #ff0000;
  transition: width 0.1s linear;
`;

export const Divider = styled.div`
  position: absolute;
  left: 75%;
  top: 0;
  width: 6px;
  height: 100%;
  background: #ff2200;
  z-index: 10;
  box-shadow: 0 0 8px #ff0000;
`;

export const ZoneLabel = styled.span<{ $side: 'edge' | 'cum' }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$side === 'edge' ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  z-index: 5;
  pointer-events: none;
  user-select: none;
`;

export const BarText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  z-index: 15;
  pointer-events: none;
  user-select: none;
`;

export const SpeedText = styled.div`
  font-size: 16px;
  color: #ffaa00;
  min-height: 24px;
  margin-bottom: 8px;
`;

/* ===== Props & Components ===== */
interface GameScreenProps {
  message: string;
  flashOn: boolean;
  showFlash: boolean;
  showCumZone: boolean;
  edgeWidth: number;
  cumWidth: number;
  barText: string;
  speedText: string;
  finishType: 'cum' | 'edge' | null;
  wrapperClass: string;
  onCum: () => void;
  onReset: () => void;
}

export function GameScreen({
  message,
  flashOn,
  showFlash,
  showCumZone,
  edgeWidth,
  cumWidth,
  barText,
  speedText,
  finishType,
  wrapperClass,
  onCum,
  onReset,
}: GameScreenProps) {
  return (
    <GameBox>
      <MessageText>{message}</MessageText>
      <FlashIndicator $on={flashOn} $visible={showFlash}>
        <span>冲</span>
      </FlashIndicator>
      <ProgressBar>
        <EdgeZone>
          <EdgeFill $width={edgeWidth} />
        </EdgeZone>
        <CumZone $show={showCumZone}>
          <CumFill $width={cumWidth} />
        </CumZone>
        <Divider />
        <ZoneLabel $side="edge">边缘区</ZoneLabel>
        <ZoneLabel $side="cum">射精区</ZoneLabel>
        <BarText>{barText}</BarText>
      </ProgressBar>
      <SpeedText>{speedText}</SpeedText>
      <Show when={finishType === 'cum'}>
        {() => (
          <StartButton type="button" onClick={onCum} style={{ marginTop: 30, maxWidth: 300 }}>
            💦 射！
          </StartButton>
        )}
      </Show>
      <Show when={finishType !== null}>
        {() => (
          <StartButton
            type="button"
            onClick={onReset}
            style={{ marginTop: 12, maxWidth: 300, background: '#555' }}
          >
            重新开始
          </StartButton>
        )}
      </Show>
    </GameBox>
  );
}

/* ===== 设置界面 ===== */
interface GameSetupProps {
  onStart: () => void;
}

export function GameSetup({ onStart }: GameSetupProps) {
  const store = getEdgeStore();

  return (
    <SetupForm>
      <FormGroup>
        <Label>游戏时长</Label>
        <Select
          value={store.setup.duration}
          onChange={(e) => store.setSetup('duration', Number(e.target.value))}
        >
          <option value={3}>3 分钟</option>
          <option value={5}>5 分钟</option>
          <option value={10}>10 分钟</option>
          <option value={15}>15 分钟</option>
          <option value={20}>20 分钟</option>
          <option value={30}>30 分钟</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>难度</Label>
        <Select
          value={store.setup.difficulty}
          onChange={(e) => store.setSetup('difficulty', Number(e.target.value))}
        >
          <option value={0}>新手</option>
          <option value={1}>简单</option>
          <option value={2}>普通</option>
          <option value={3}>困难</option>
          <option value={4}>地狱</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>射精概率</Label>
        <Select
          value={store.setup.cumOption}
          onChange={(e) => store.setSetup('cumOption', Number(e.target.value))}
        >
          <option value={0}>禁止射精</option>
          <option value={0.25}>25%</option>
          <option value={0.5}>50%</option>
          <option value={0.75}>75%</option>
          <option value={1}>100%</option>
        </Select>
      </FormGroup>
      <StartButton type="button" onClick={onStart}>
        开始
      </StartButton>
    </SetupForm>
  );
}

const store = getEdgeStore();

export function EdgeMePlease() {
  // empty — 不再需要这个 wrapper
  return null;
}
