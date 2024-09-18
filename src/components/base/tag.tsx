import styled from 'styled-components';

export enum TagPresetColor {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
  INFO = 'INFO',
  PROCESSING = 'PROCESSING',
}

export enum TagType {
  SOLID = 'SOLID',
  OUTLINE = 'OUTLINE',
  DEFAULT = 'DEFAULT',
}

export interface TagProps {
  $type?: TagType;
  $color?: { font?: string; bg?: string; border?: string };
  $presetColor?: TagPresetColor;
}

function getColor(presetColor?: TagProps['$presetColor']): Required<TagProps['$color']> {
  switch (presetColor) {
    case TagPresetColor.SUCCESS:
      return { font: '#52c41a', bg: '#f6ffed', border: '#b7eb8f' };
    case TagPresetColor.WARNING:
      return { font: '#faad14', bg: '#fffbe6', border: '#ffe58f' };
    case TagPresetColor.DANGER:
      return { font: '#ff4d4f', bg: '#fff2f0', border: '#ffccc7' };
    case TagPresetColor.PROCESSING:
      return { font: '#1677ff', bg: '#e6f4ff', border: '#91caff' };
    case TagPresetColor.INFO:
    default:
      return { font: 'rgba(0, 0, 0, 0.88)', bg: '#fafafa', border: 'rgb(217, 217, 217)' };
  }
}

interface ColorVar {
  '--font-color': string;
  '--bg-color': string;
  '--border-color': string;
}

function getColorVar(colorInfo: Required<TagProps>['$color']): ColorVar {
  const { font = '', bg = '', border = '' } = colorInfo;

  return { '--font-color': font, '--bg-color': bg, '--border-color': border };
}

function colorVar2Str(colorInfo: ReturnType<typeof getColorVar>) {
  return Object.entries(colorInfo)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
}

export const Tag = styled.section<TagProps>`
  ${(props) => {
    const { $type = 'default', $presetColor, $color = getColor($presetColor) } = props;
    const defaultColor = getColor();
    const colorInfo = getColorVar({ ...defaultColor, ...$color });

    if ($type === TagType.SOLID) {
      colorInfo['--border-color'] = 'transparent';
    } else if ($type === TagType.OUTLINE) {
      colorInfo['--bg-color'] = 'transparent';
    }

    return colorVar2Str(colorInfo);
  }}

  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 9999px;
  line-height: 1;
  color: var(--font-color);
  background-color: var(--bg-color);
  outline: 0.1rem solid var(--border-color);
  flex-shrink: 0;
  white-space: nowrap;
`;
