import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    border-color: ${theme.colors.blue_light};
    justify-content: center;
    align-items: center;
    width: 48.5%;
    margin-bottom: 24px;
  `}
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 6px;
`;

export const ExtraInfoWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  z-index: 1;
  flex-direction: row;
  width: 100%;
`;

export const TagWrapper = styled.View`
  margin-left: auto;
`;

export const Info = styled.View`
  width: 100%;
  padding-top: 4px;
  gap: 5px;
`;
