import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

type InputTextProps = TextInputProps;

export function InputText({ ...rest }: InputTextProps) {
  const [isActive, setActive] = useState(false);
  const [showInputContent, setShowInputContent] = useState(false);

  const theme = useTheme();

  function toggleActive() {
    setActive(prevState => !prevState);
  }

  function toggleSecureIcon() {
    setShowInputContent(prevState => !prevState);
  }

  return (
    <S.Wrapper isActive={isActive}>
      <S.Input
        autoCorrect={false}
        autoCapitalize="none"
        {...rest}
        onFocus={toggleActive}
        onBlur={toggleActive}
        secureTextEntry={!showInputContent}
      />

      {!!rest.secureTextEntry && (
        <S.IconButton onPress={toggleSecureIcon}>
          <Feather
            name={showInputContent ? 'eye-off' : 'eye'}
            size={24}
            color={theme.colors.gray_2}
          />
        </S.IconButton>
      )}
    </S.Wrapper>
  );
}