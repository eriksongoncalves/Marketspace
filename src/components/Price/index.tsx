import { ThemeColors, ThemeFontSizes } from "@shared/types/theme";
import { formatPrice } from "@shared/utils";

import { Text } from "../Text";
import * as S from "./styles";

type PriceProps = {
  priceSize?: ThemeFontSizes;
  simbolSize?: ThemeFontSizes;
  color?: ThemeColors;
  price: number;
};

export function Price({
  priceSize = 16,
  simbolSize = 12,
  color = "gray_1",
  price = 0
}: PriceProps) {
  return (
    <S.Wrapper>
      <Text color={color} fontFamily="karlaBold" size={simbolSize}>
        R$
      </Text>
      <Text color={color} fontFamily="karlaBold" size={priceSize}>
        {`${formatPrice(price)}`}
      </Text>
    </S.Wrapper>
  );
}
