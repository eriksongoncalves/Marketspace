import { StatusBar } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray_6};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.gray_6};
    margin: 24px;
  `}
`;

export const SellerInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const AdContent = styled.View`
  margin-top: 24px;
  align-items: flex-start;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

export const OtherInfos = styled.View`
  margin-top: 24px;
  gap: 16px;
`;

export const PaymentWrapper = styled.View`
  gap: 8px;
`;

export const PaymentItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

export const BottomAction = styled.View`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    bottom: 0;
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

export const MyAdActions = styled.View`
  width: 100%;
  gap: 8px;
  margin-top: 32px;
`;

export const CarrouselWrapper = styled.View`
  width: 100%;
`;

export const CarrouselOverlay = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  background: rgba(30, 30, 30, 0.6);
  z-index: 2;
`;

export const PreviewMessageContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    margin-top: ${StatusBar.currentHeight! + 20}px;
    background-color: ${theme.colors.blue_light};
    align-items: center;
    justify-content: center;
  `}
`;
