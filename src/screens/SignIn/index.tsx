import LogoIcon from '@assets/logo-icon.svg';
import { Button, InputText, Text } from '@components/index';
import * as S from './styles';

export function SignIn() {
  function handleSign() {
    console.log('>>> handleSign');
  }

  function handleNewAccount() {
    console.log('>>> handleNewAccount');
  }

  return (
    <S.Container>
      <S.Wrapper>
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

          <S.ButtonWrapper>
            <Button bgColor="blue_light" onPress={handleSign}>
              <Text>Entrar</Text>
            </Button>
          </S.ButtonWrapper>
        </S.FormWrapper>
      </S.Wrapper>

      <S.FooterWrapper>
        <Text color="gray_2">Ainda não tem acesso?</Text>

        <S.ButtonWrapper>
          <Button bgColor="gray_5" onPress={handleNewAccount}>
            <Text color="gray_2">Criar uma conta</Text>
          </Button>
        </S.ButtonWrapper>
      </S.FooterWrapper>
    </S.Container>
  );
}
