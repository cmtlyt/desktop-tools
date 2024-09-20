import styled from 'styled-components';
import { ThemeColor } from './type';
import { colorVar2Str, getThemeColorVar } from './util';

export enum ButtonType {
  SOLID = 'SOLID',
  OUTLINE = 'OUTLINE',
  DEFAULT = 'DEFAULT',
}

export enum ButtonTheme {
  PRIMARY = 'PRIMARY',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
  INFO = 'INFO',
}

export interface ButtonProps {
  $type?: ButtonType;
  $color?: Partial<ThemeColor>;
  $presetTheme?: ButtonTheme;
  $disabled?: boolean;
}

function getColor(presetColor?: ButtonTheme): ThemeColor {
  switch (presetColor) {
    case ButtonTheme.PRIMARY:
      return { font: '#fff', bg: '#1677ff', border: '#1677ff' };
    case ButtonTheme.WARNING:
      return { font: '#fff', bg: '#faad14', border: '#faad14' };
    case ButtonTheme.DANGER:
      return { font: '#fff', bg: '#f5222d', border: '#f5222d' };
    case ButtonTheme.INFO:
    case undefined:
      return { font: 'rgba(0, 0, 0, 0.88)', bg: '#fafafa', border: 'rgb(217, 217, 217)' };
    default:
      presetColor satisfies never;
      return { font: 'rgba(0, 0, 0, 0.88)', bg: '#fafafa', border: 'rgb(217, 217, 217)' };
  }
}

export const Button = styled.button<ButtonProps>`
  ${(props) => {
    const { $type = ButtonType.DEFAULT, $presetTheme, $color = getColor($presetTheme) } = props;
    const defaultColor = getColor();
    const colorInfo = getThemeColorVar({ ...defaultColor, ...$color });

    if ($type === ButtonType.OUTLINE) {
      colorInfo['--font-color'] = colorInfo['--bg-color'];
      colorInfo['--bg-color'] = 'transparent';
    }

    return colorVar2Str(colorInfo);
  }}

  padding: 0 2rem;
  height: 3rem;
  font-size: 1.4rem;
  border: none;
  border-radius: var(--radius-button);
  line-height: 1;
  color: var(--font-color);
  background-color: var(--bg-color);
  outline: 0.1rem solid var(--border-color);
  flex-shrink: 0;
  white-space: nowrap;
  user-select: none;
  touch-action: none;

  ${(props) => {
    if (!props.$disabled) return '';
    return { opacity: 0.5, pointerEvents: 'none' };
  }}
`;
