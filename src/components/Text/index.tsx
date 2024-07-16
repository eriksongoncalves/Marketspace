import { TextProps as TextPropsBase } from "react-native";

import { ThemeColors, ThemeFontFamilies, ThemeFontSizes } from "@shared/types/theme";
import { Spacing } from "@theme/index";
import * as S from "./styles";

type TextProps = {
  size?: ThemeFontSizes;
  fontFamily?: ThemeFontFamilies;
  color?: ThemeColors;
  align?: "center" | "left" | "right" | "justify";
  trasnform?: "none" | "uppercase" | "lowercase";
  mt?: Spacing;
  mb?: Spacing;
} & TextPropsBase;

export function Text({
  size = 14,
  fontFamily = "karlaRegular",
  color = "gray_6",
  align = "left",
  trasnform = "none",
  children,
  ...rest
}: TextProps) {
  return (
    <S.Wrapper
      size={size}
      fontFamily={fontFamily}
      color={color}
      align={align}
      trasnform={trasnform}
      {...rest}
    >
      {children}
    </S.Wrapper>
  );
}
