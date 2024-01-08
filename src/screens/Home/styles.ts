import { StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
    background-color: ${theme.colors.gray_6};
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 20px;
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const WellcomeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const WellcomeTexts = styled.View`
  gap: 8px;
  min-width: 125px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
`;
