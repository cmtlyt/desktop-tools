import styled from 'styled-components';
import { ThemeColor } from './type';
import { colorVar2Str, getThemeColorVar } from './util';

export enum TagType {
  SOLID = 'SOLID',
  OUTLINE = 'OUTLINE',
  DEFAULT = 'DEFAULT',
}

export enum TagTheme {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
  INFO = 'INFO',
  PROCESSING = 'PROCESSING',
}

export interface TagProps {
  $type?: TagType;
  $color?: Partial<ThemeColor>;
  $presetTheme?: TagTheme;
}

function getColor(presetColor?: TagTheme): ThemeColor {
  switch (presetColor) {
    case TagTheme.SUCCESS:
      return { font: '#52c41a', bg: '#f6ffed', border: '#b7eb8f' };
    case TagTheme.WARNING:
      return { font: '#faad14', bg: '#fffbe6', border: '#ffe58f' };
    case TagTheme.DANGER:
      return { font: '#ff4d4f', bg: '#fff2f0', border: '#ffccc7' };
    case TagTheme.PROCESSING:
      return { font: '#1677ff', bg: '#e6f4ff', border: '#91caff' };
    case TagTheme.INFO:
    case undefined:
      return { font: 'rgba(0, 0, 0, 0.88)', bg: '#fafafa', border: 'rgb(217, 217, 217)' };
    default:
      presetColor satisfies never;
      return { font: 'rgba(0, 0, 0, 0.88)', bg: '#fafafa', border: 'rgb(217, 217, 217)' };
  }
}

export const Tag = styled.section<TagProps>`
  ${(props) => {
    const { $type = TagType.DEFAULT, $presetTheme, $color = getColor($presetTheme) } = props;
    const defaultColor = getColor();
    const colorInfo = getThemeColorVar({ ...defaultColor, ...$color });

    if ($type === TagType.SOLID) {
      colorInfo['--border-color'] = 'transparent';
    } else if ($type === TagType.OUTLINE) {
      colorInfo['--bg-color'] = 'transparent';
    }

    return colorVar2Str(colorInfo);
  }}

  padding: 0.5rem 1rem;
  height: max-content;
  font-size: 1.2rem;
  border-radius: var(--radius-full);
  line-height: 1;
  color: var(--font-color);
  background-color: var(--bg-color);
  outline: 0.1rem solid var(--border-color);
  flex-shrink: 0;
  white-space: nowrap;
`;
