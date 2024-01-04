import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const LogoWrapper = styled.View`
  align-items: center;
  margin-top: 108px;
`;
