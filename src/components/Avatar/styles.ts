import styled, { css } from 'styled-components/native';
import { AvatarSizes } from './';

type ContainerProps = {
  size: AvatarSizes;
};

const containerModifiers = {
  large: () => css`
    width: 88px;
    height: 88px;
    border-width: 3px;
  `,
  medium: () => css`
    width: 45px;
    height: 45px;
    border-width: 2px;
  `,
  small: () => css`
    width: 24px;
    height: 24px;
    border-width: 2px;
  `
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, size }) => css`
    background-color: ${theme.colors.gray_5};
    border-color: ${theme.colors.blue_light};
    border-radius: 50%;
    justify-content: center;
    align-items: center;

    ${containerModifiers[size]()}
  `}
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const EditWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_light};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -5px;
    bottom: 0;
  `}
`;
