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

export const AvatarWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_5};
    width: 88px;
    height: 88px;
    border-width: 3px;
    border-color: ${theme.colors.blue_light};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  `}
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

export const ButtonWrapper = styled.View`
  margin-top: 16px;
  width: 100%;
`;

export const FooterWrapper = styled.View`
  padding-top: 56px;
  align-items: center;
`;
