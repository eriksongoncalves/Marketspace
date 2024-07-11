import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_6};
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
    flex: 1;
  `}
`;

export const Filter = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Select = styled.View`
  width: 110px;
`;
