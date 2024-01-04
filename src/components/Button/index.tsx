import { TouchableOpacityProps } from 'react-native';

import { ThemeColors } from '@shared/types/theme';
import * as S from './styles';

type ButtonProps = TouchableOpacityProps & {
  bgColor?: ThemeColors;
};

export function Button({
  bgColor = 'blue_light',
  children,
  ...rest
}: ButtonProps) {
  return (
    <S.Wrapper bgColor={bgColor} {...rest}>
      {children}
    </S.Wrapper>
  );
}
