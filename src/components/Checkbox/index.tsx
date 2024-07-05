import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "../Text";
import * as S from "./styles";

type CheckboxProps = {
  label: string;
  isChecked?: boolean;
  onPress?: (isChecked: boolean) => void;
};

export function Checkbox({ label, isChecked = false, onPress }: CheckboxProps) {
  const theme = useTheme();
  const [checked, setChecked] = useState(!!isChecked);

  const checkPropsDefault = useMemo(
    () => ({
      size: 24,
      color: theme.colors.blue_light
    }),
    [theme]
  );

  const onCheck = () => {
    setChecked(prevState => !prevState);
    !!onPress && onPress(!isChecked);
  };

  return (
    <TouchableWithoutFeedback onPress={onCheck}>
      <S.Wrapper>
        {checked ? (
          <MaterialCommunityIcons name="checkbox-marked" {...checkPropsDefault} />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank-outline" {...checkPropsDefault} />
        )}

        <Text color="gray_2" size={16}>
          {label}
        </Text>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
}
