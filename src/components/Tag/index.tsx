import { ThemeColors } from '@shared/types/theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as S from './styles';

export type TagSizes = 'large' | 'medium' | 'small';

type TagProps = {
  children: React.ReactNode;
  bgColor?: ThemeColors;
  size?: TagSizes;
  onPress?: () => void;
};

export function Tag({
  bgColor = 'blue_light',
  size = 'medium',
  children,
  onPress
}: TagProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Container bgColor={bgColor} size={size}>
        {children}
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
