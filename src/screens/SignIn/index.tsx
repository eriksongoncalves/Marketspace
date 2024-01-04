import { SafeAreaView } from 'react-native';

import LogoIcon from '@assets/logo-icon.svg';
import { Text } from '@components/index';
import * as S from './styles';

export function SignIn() {
  return (
    <S.Container>
      <SafeAreaView>
        <S.LogoWrapper>
          <LogoIcon />

          <Text size={32} fontFamily="karlaBold" color="gray_1" align="center">
            marketspace
          </Text>
          <Text color="gray_3" align="center">
            Seu espaço de compra e venda
          </Text>
        </S.LogoWrapper>

        {/* <S.Title>marketspace</S.Title>
      <S.Subtitle>Seu espaço de compra e venda</S.Subtitle>
			
			<S.FormContainer>
			<S.FormText>Acesse sua conta</S.FormText>
		</S.FormContainer> */}
      </SafeAreaView>
    </S.Container>
  );
}
