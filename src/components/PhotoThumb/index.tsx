import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import * as S from "./styles";

type PhotoProps = {
  photoUri: string;
  onRemovePhoto: () => void;
};

type ButtonProps = {
  onLoadPhoto: () => void;
};

type PhotoThumbProps = PhotoProps & ButtonProps;

function Photo({ photoUri, onRemovePhoto }: PhotoProps) {
  const theme = useTheme();

  return (
    <S.PhotoWrapper>
      <S.PhotoImage source={{ uri: photoUri }} />
      <S.CloseButton onPress={onRemovePhoto}>
        <Feather name="x" size={12} color={theme.colors.gray_7} />
      </S.CloseButton>
    </S.PhotoWrapper>
  );
}

function Button({ onLoadPhoto }: ButtonProps) {
  const theme = useTheme();

  return (
    <S.ButtonPhoto onPress={onLoadPhoto}>
      <Feather name="plus" size={24} color={theme.colors.gray_4} />
    </S.ButtonPhoto>
  );
}

export function PhotoThumb({ photoUri, onLoadPhoto, onRemovePhoto }: PhotoThumbProps) {
  return photoUri ? (
    <Photo photoUri={photoUri} onRemovePhoto={onRemovePhoto} />
  ) : (
    <Button onLoadPhoto={onLoadPhoto} />
  );
}
