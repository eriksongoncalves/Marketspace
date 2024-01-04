import styled, { DefaultTheme, css } from 'styled-components/native';

const modifiers = {
  isActive: (theme: DefaultTheme) => css`
    border-width: 1px;
    border-color: ${theme.colors.gray_3};
  `
};

type WrapperProps = {
  isActive: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, isActive }) => css`
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.gray_7};
    border-radius: 6px;
    padding-right: 16px;

    ${isActive && modifiers.isActive(theme)};
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    padding: 12px 16px;
    font-family: ${theme.fonts.family.karla.regular};
    color: ${theme.colors.gray_2};
    font-size: ${theme.fonts.size[16]};
  `}
`;

export const IconButton = styled.TouchableWithoutFeedback`
  margin-right: 16px;
`;
