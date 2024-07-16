import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray_6};
  `}
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Thumbs = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  margin-bottom: 32px;
`;

export const Form = styled.View`
  gap: 16px;
`;

export const AcceptExchange = styled.View`
  align-items: flex-start;
`;

export const PaymentMethosWrapper = styled.View`
  gap: 12px;
  margin-bottom: 40px;
  flex: 1;
`;

export const RadioWrapper = styled.View`
  gap: 22px;
  flex-direction: row;
`;

export const BottomAction = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 90px;
    background-color: ${theme.colors.white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    gap: 12px;
  `}
`;

export const ButtonWrapper = styled.View`
  max-width: 180px;
  flex-direction: row;
`;
