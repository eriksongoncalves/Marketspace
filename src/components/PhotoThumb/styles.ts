import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const { width } = Dimensions.get("window");
const SCREEN_PADDING = 24;
const GAP = 8;
const photoSize = ((width - SCREEN_PADDING * 2 - GAP * 2) / 3).toFixed();

export const ButtonPhoto = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_5};
    min-width: 100px;
    min-height: 100px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
  `}
`;

export const PhotoWrapper = styled.View``;

export const PhotoImage = styled.Image`
  width: ${photoSize}px;
  height: ${photoSize}px;
  border-radius: 8px;
`;

export const CloseButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: ${theme.colors.gray_2};
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: 1;
  `}
`;
