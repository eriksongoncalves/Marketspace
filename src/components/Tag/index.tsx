import { ThemeColors } from '@shared/types/theme';
import * as S from './styles';

export type TagSizes = 'large' | 'medium' | 'small';

type TagProps = {
  children: React.ReactNode;
  bgColor?: ThemeColors;
  size?: TagSizes;
};

export function Tag({ bgColor = 'blue', size = 'medium', children }: TagProps) {
  return (
    <S.Container bgColor={bgColor} size={size}>
      {children}
    </S.Container>
  );
}
