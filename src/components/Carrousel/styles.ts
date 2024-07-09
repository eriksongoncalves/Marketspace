import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
`;

export const Item = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Indicators = styled.View`
  width: 100%;
  height: 10px;
  flex-direction: row;
  gap: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 2px;
`;

export const Indicator = styled.View<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    flex: 1;
    flex-direction: row;
    background-color: ${theme.colors.gray_7};
    opacity: ${isActive ? 0.9 : 0.5};
    height: 3px;
    border-radius: 5px;
  `}
`;
