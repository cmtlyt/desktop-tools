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
}

function getColor(presetColor?: ButtonTheme): ThemeColor {
  switch (presetColor) {
    case ButtonTheme.PRIMARY:
      return { font: '#52c41a', bg: '#f6ffed', border: '#b7eb8f' };
    case ButtonTheme.WARNING:
      return { font: '#faad14', bg: '#fffbe6', border: '#ffe58f' };
    case ButtonTheme.DANGER:
      return { font: '#ff4d4f', bg: '#fff2f0', border: '#ffccc7' };
    case ButtonTheme.INFO:
    case undefined:
      return { font: 'rgba(0, 0, 0, 0.88)', bg: '#fafafa', border: 'rgb(217, 217, 217)' };
    default:
      // @ts-expect-error never
      // eslint-disable-next-line no-case-declarations
      const _: never = presetColor;
      return { font: 'rgba(0, 0, 0, 0.88)', bg: '#fafafa', border: 'rgb(217, 217, 217)' };
  }
}

export const Button = styled.button<ButtonProps>`
  ${(props) => {
    const { $type = ButtonType.DEFAULT, $presetTheme, $color = getColor($presetTheme) } = props;
    const defaultColor = getColor();
    const colorInfo = getThemeColorVar({ ...defaultColor, ...$color });

    if ($type === ButtonType.SOLID) {
      colorInfo['--border-color'] = 'transparent';
    } else if ($type === ButtonType.OUTLINE) {
      colorInfo['--bg-color'] = 'transparent';
    }

    return colorVar2Str(colorInfo);
  }}

  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 1.2rem;
  line-height: 1;
  color: var(--font-color);
  background-color: var(--bg-color);
  outline: 0.1rem solid var(--border-color);
  flex-shrink: 0;
  white-space: nowrap;
`;
