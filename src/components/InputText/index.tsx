import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type InputTextProps = TextInputProps & {
  noBorders?: boolean;
};

export function InputText({ noBorders = false, ...rest }: InputTextProps) {
  const [isActive, setActive] = useState(false);
  const [showInputContent, setShowInputContent] = useState(false);

  const theme = useTheme();

  function toggleActive() {
    if (!noBorders) {
      setActive(prevState => !prevState);
    }
  }

  function toggleSecureIcon() {
    setShowInputContent(prevState => !prevState);
  }

  return (
    <S.Wrapper isActive={isActive}>
      <S.Input
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete="off"
        {...rest}
        onFocus={toggleActive}
        onBlur={toggleActive}
        secureTextEntry={!showInputContent}
        placeholderTextColor={theme.colors.gray_4}
      />

      {!!rest.secureTextEntry && (
        <S.IconButton onPress={toggleSecureIcon}>
          <Feather
            name={showInputContent ? "eye-off" : "eye"}
            size={24}
            color={theme.colors.gray_2}
          />
        </S.IconButton>
      )}
    </S.Wrapper>
  );
}
