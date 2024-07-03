import styled, { css } from 'styled-components/native';

import { ThemeColors } from '@shared/types/theme';

type WrapperProps = {
  bgColor: ThemeColors;
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  ${({ theme, bgColor }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    background-color: ${theme.colors[bgColor]};
    border-radius: 6px;
    gap: 8px;
    padding: 12px;
  `}
`;
