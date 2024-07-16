import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "../Text";
import * as S from "./styles";

type RadioProps = {
  label: string;
  isChecked?: boolean;
  onPress?: () => void;
};

export function Radio({ label, isChecked = false, onPress }: RadioProps) {
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Wrapper>
        {isChecked ? (
          <Ionicons name="radio-button-on" size={24} color={theme.colors.blue_light} />
        ) : (
          <Ionicons name="radio-button-off" size={24} color={theme.colors.gray_4} />
        )}
        <Text color="gray_2" size={16}>
          {label}
        </Text>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
}
