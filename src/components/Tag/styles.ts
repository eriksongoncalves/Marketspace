import styled, { css } from "styled-components/native";

import { ThemeColors } from "@shared/types/theme";
import { TagSizes } from ".";

type ContainerProps = {
  bgColor: ThemeColors;
  size: TagSizes;
};

const containerModifiers = {
  large: () => css`
    padding: 6px 12px;
    /* max-width: 100px; */
  `,
  medium: () => css`
    padding: 8px 2px;
    max-width: 50px;
  `,
  small: () => css`
    padding: 2px 8px;
    max-width: 43px;
  `
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, bgColor, size }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors[bgColor]};
    border-radius: 20px;
    gap: 6px;

    ${containerModifiers[size]()}
  `}
`;
