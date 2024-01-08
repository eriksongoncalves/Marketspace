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
  min-width: 125px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
`;

export const MyProductsInfo = styled.View`
  margin-top: 32px;
`;

export const MyProductsInfoBox = styled.View`
  margin-top: 12px;
  background: rgba(100, 122, 199, 0.1);
  border-radius: 6px;
  padding: 16px 12px;

  flex-direction: row;
  align-items: center;
`;

export const ActivityProductsInfo = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const TextButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  gap: 10px;
`;

export const FilterInputWrapper = styled.View`
  margin-top: 32px;
`;

export const InputWrapper = styled.View`
  ${({ theme }) => css`
    margin-top: 12px;
    background-color: ${theme.colors.gray_7};
    border-radius: 6px;
    padding-right: 16px;

    flex-direction: row;
    align-items: center;
  `}
`;

export const Input = styled.View`
  flex: 1;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const VerticalDivider = styled.View`
  ${({ theme }) => css`
    width: 1px;
    background-color: ${theme.colors.gray_4};
    opacity: 0.5;
  `}
`;
