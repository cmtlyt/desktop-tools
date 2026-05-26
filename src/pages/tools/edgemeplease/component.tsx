import { memo, SelectHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';
import { Show } from '@/components/show';
import { useEdgeStoreSlice, getEdgeStore } from './store';

/* ===== 布局 ===== */
export const PageWrapper = styled.div<{ $bg?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: 24px;
  background: ${(props) => props.$bg === 'red' ? '#330000' : props.$bg === 'green' ? '#003300' : '#000'};
  color: #fff;
  font-family: -apple-system, 'Segoe UI', system-ui, sans-serif;
  font-size: 18px;
  transition: background 0.3s;
`;

/* ===== 设置界面 ===== */
export const SetupBox = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 8vh;
`;

export const Title = styled.h1`
  font-family: Georgia, 'Noto Serif SC', serif;
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 6px;
  color: #fff;
`;

export const Subtitle = styled.p`
  color: #aaa;
  font-size: 16px;
  margin-bottom: 28px;
`;

export const Rules = styled.ul`
  background: #111;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 28px;
  font-size: 15px;
  line-height: 1.8;
  color: #ccc;
  list-style: disc inside;

  li {
    margin-bottom: 8px;
  }
  li::marker {
    color: #666;
  }
`;

export const FormRow = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 14px;

  span {
    width: 130px;
    flex-shrink: 0;
    font-size: 15px;
    color: #aaa;
  }
`;

export const StyledSelect = styled.select`
  flex: 1;
  padding: 10px 12px;
  background: #111;
  color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #0f0;
  }
`;

export const StartButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 14px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

/* ===== 游戏界面 ===== */
export const GameBox = styled.div`
  width: 100%;
  max-width: 700px;
  margin-top: 6vh;
  text-align: center;
`;

export const MessageText = styled.div`
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 44px;
  line-height: 1.4;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-top: 5%;
`;

/* ===== Flash 指示器 ===== */
const flashAnim = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
`;

export const FlashIndicator = styled.div<{ $on: boolean; $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #0f0;
  margin: 20px auto;
  font-size: 28px;
  font-weight: 700;
  color: #0f0;
  background: rgba(0, 255, 0, 0.1);
  animation: ${(props) => (props.$on ? flashAnim : 'none')} 1s infinite;
`;

/* ===== 进度条 ===== */
export const ProgressBar = styled.div`
  margin: 50px auto 0;
  width: 80%;
  max-width: 500px;
  height: 32px;
  background: #1a1a1a;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #333;
`;

export const EdgeZone = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const EdgeFill = styled.div<{ $width: number }>`
  height: 100%;
  width: ${(props) => props.$width}%;
  background: linear-gradient(90deg, #006600, #00cc00);
  transition: width 0.1s linear;
`;

export const CumZone = styled.div<{ $show: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 25%;
  display: ${(props) => (props.$show ? 'block' : 'none')};
  z-index: 1;
  background: #002200;
`;

export const CumFill = styled.div<{ $width: number }>`
  height: 100%;
  width: ${(props) => props.$width}%;
  background: linear-gradient(90deg, #cc0000, #ff0000);
  transition: width 0.1s linear;
`;

/* 红色分隔条 */
export const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 75%;
  bottom: 0;
  width: 6px;
  z-index: 10;
  background: #ff0000;
  box-shadow: 0 0 8px #ff0000, 0 0 16px rgba(255, 0, 0, 0.6);
`;

export const ZoneLabel = styled.span<{ $side: 'edge' | 'cum' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #888;
  ${(props) => (props.$side === 'edge' ? 'left: 8px;' : 'right: 8px;')}
`;

export const BarText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
`;

export const SpeedText = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #ffaa00;
  font-weight: 600;
`;

/* ===== 设置界面组件 ===== */
interface SelectOption {
  value: string;
  label: string;
}

interface SelectRowProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
}

export const SelectRow = memo(function SelectRow({ label, options, ...rest }: SelectRowProps) {
  return (
    <FormRow>
      <span>{label}</span>
      <StyledSelect {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </StyledSelect>
    </FormRow>
  );
});

/* ===== 游戏设置界面 ===== */
export function GameSetup({ onStart }: { onStart: () => void }) {
  const { setup } = useEdgeStoreSlice('setup');

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = field === 'duration' ? Number(e.target.value) : Number(e.target.value);
    getEdgeStore().setSetup({ [field]: val });
  };

  return (
    <SetupBox>
      <Title>EdgeMePlease</Title>
      <Subtitle>控射 / 边缘控制 · 中文复刻版</Subtitle>
      <Rules>
        <li>Go 阶段打飞机，Stop 阶段停下。交替进行，直到时间结束。</li>
        <li>速度会随着时间推移越来越快，做好心理准备。</li>
        <li>最后能否射精由运气和你自己的选择决定。</li>
        <li>如果屏幕亮红色，今天你不太走运，不能射。</li>
        <li>祝你好运！</li>
      </Rules>
      <SelectRow
        label="持续时间"
        value={String(setup.duration)}
        onChange={handleChange('duration')}
        options={[
          { value: '2', label: '快枪手 (2分)' },
          { value: '7', label: '短 (7分)' },
          { value: '15', label: '普通 (15分)' },
          { value: '30', label: '长 (30分)' },
          { value: '60', label: '非常长 (60分)' },
        ]}
      />
      <SelectRow
        label="选择难度"
        value={String(setup.difficulty)}
        onChange={handleChange('difficulty')}
        options={[
          { value: '0', label: '无聊的' },
          { value: '1', label: '简单' },
          { value: '2', label: '普通' },
          { value: '3', label: '困难' },
          { value: '4', label: '不可能的' },
        ]}
      />
      <SelectRow
        label="想射吗？"
        value={String(setup.cumOption)}
        onChange={handleChange('cumOption')}
        options={[
          { value: '0', label: '不了，我待会再射' },
          { value: '0.2', label: '不太想射' },
          { value: '0.5', label: '听你的吧' },
          { value: '0.7', label: '想，让我射吧' },
          { value: '0.9', label: '求你了！让我射吧！' },
        ]}
      />
      <StartButton type="button" onClick={onStart}>
        开始
      </StartButton>
    </SetupBox>
  );
}

/* ===== 游戏主界面 ===== */
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
  progressColor: string;
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
  progressColor,
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
