import LogoIcon from '@assets/logo-icon.svg';
import { InputText, Text } from '@components/index';
import * as S from './styles';

export function SignIn() {
  return (
    <S.Container>
      <S.LogoWrapper>
        <LogoIcon />

        <Text size={32} fontFamily="karlaBold" color="gray_1" align="center">
          marketspace
        </Text>
        <Text color="gray_3" align="center">
          Seu espaço de compra e venda
        </Text>
      </S.LogoWrapper>

      <S.FormWrapper>
        <Text color="gray_2" align="center">
          Acesse sua conta
        </Text>

        <InputText placeholder="E-mail" keyboardType="email-address" />

        <InputText placeholder="Senha" secureTextEntry />
      </S.FormWrapper>
    </S.Container>
  );
}
