import styled, { DefaultTheme, css } from 'styled-components/native';

import {
  ThemeColors,
  ThemeFontFamilies,
  ThemeFontSizes
} from '@shared/types/theme';
import { mapFontFamilies } from '@theme/index';

type WrapperProps = {
  size: ThemeFontSizes;
  fontFamily: ThemeFontFamilies;
  color: ThemeColors;
  align: 'center' | 'left' | 'right';
};

const modifiers = {
  fontFamily: (fontFamily: ThemeFontFamilies) => mapFontFamilies[fontFamily],
  lineHeight: (fontSize: ThemeFontSizes, theme: DefaultTheme) =>
    theme.fonts.lineHeight(fontSize)
};

export const Wrapper = styled.Text<WrapperProps>`
  ${({ theme, size, fontFamily, color, align }) => css`
    font-size: ${theme.fonts.size[size]};
    font-family: ${modifiers.fontFamily(fontFamily)};
    color: ${theme.colors[color]};
    line-height: ${modifiers.lineHeight(size, theme)};
    text-align: ${align};
  `}
`;
