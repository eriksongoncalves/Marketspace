import { StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
    background-color: ${theme.colors.gray_6};
    padding-left: 48px;
    padding-right: 48px;
  `}
`;

export const LogoWrapper = styled.View`
  align-items: center;
  margin-top: 80px;
  margin-bottom: 32px;
`;

export const FormWrapper = styled.View`
  gap: 16px;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
  width: 100%;
`;

export const FooterWrapper = styled.View`
  padding-top: 56px;
  align-items: center;
`;
