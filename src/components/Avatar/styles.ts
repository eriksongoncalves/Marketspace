import styled, { css } from "styled-components/native";

import { ThemeColors } from "@src/shared/types/theme";
import { AvatarSizes } from "./";

type ContainerProps = {
  size: AvatarSizes;
  borderColor: ThemeColors;
};

type ImageProps = {
  size: AvatarSizes;
};

const containerModifiers = {
  large: () => css`
    width: 88px;
    height: 88px;
    border-width: 3px;
    border-radius: 44px;
  `,
  medium: () => css`
    width: 45px;
    height: 45px;
    border-width: 2px;
    border-radius: 22px;
  `,
  small: () => css`
    width: 24px;
    height: 24px;
    border-width: 1px;
    border-radius: 12px;
  `
};

const imageModifiers = {
  large: () => css`
    width: 83px;
    height: 83px;
    border-radius: 43px;
  `,
  medium: () => css`
    width: 42px;
    height: 42px;
    border-radius: 21px;
  `,
  small: () => css`
    width: 22px;
    height: 22px;
    border-radius: 10px;
  `
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, size, borderColor }) => css`
    background-color: transparent;
    border-color: ${theme.colors[borderColor]};
    justify-content: center;
    align-items: center;

    ${containerModifiers[size]()}
  `}
`;

export const Image = styled.Image<ImageProps>`
  ${({ size }) => css`
    ${imageModifiers[size]()}
  `}
`;

export const EditWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_light};
    width: 32px;
    height: 32px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -5px;
    bottom: 0;
  `}
`;
