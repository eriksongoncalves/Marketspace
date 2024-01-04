import { StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
    background-color: ${theme.colors.gray_7};
  `}
`;

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_6};
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding-bottom: 70px;
  `}
`;

export const LogoWrapper = styled.View`
  align-items: center;
  margin-top: 108px;
  margin-bottom: 70px;
`;

export const FormWrapper = styled.View`
  gap: 16px;
  padding-left: 48px;
  padding-right: 48px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`;

export const FooterWrapper = styled.View`
  padding-top: 56px;
  align-items: center;
`;
