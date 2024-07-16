import { FontFamilies, theme } from "@theme";

export type ThemeFontSizes = keyof typeof theme.fonts.size;
export type ThemeColors = keyof typeof theme.colors;
export type ThemeFontFamilies = keyof typeof FontFamilies;
