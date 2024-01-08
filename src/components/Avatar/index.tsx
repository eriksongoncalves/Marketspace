import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

export type AvatarSizes = 'large' | 'medium' | 'small';

type AvatarProps = {
  size?: AvatarSizes;
  uri?: string;
  onEditPress?: () => void;
};

export function Avatar({ size = 'medium', uri, onEditPress }: AvatarProps) {
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onEditPress}>
      <S.Container size={size}>
        {uri ? (
          <S.Image size={size} source={{ uri }} resizeMode="cover" />
        ) : (
          <Feather
            name="user"
            size={size === 'small' ? 12 : 30}
            color={theme.colors.gray_4}
          />
        )}

        {!!onEditPress && (
          <S.EditWrapper>
            <Feather name="edit-3" size={16} color={theme.colors.white} />
          </S.EditWrapper>
        )}
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
