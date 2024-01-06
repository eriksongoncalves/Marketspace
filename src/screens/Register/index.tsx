import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import LogoIcon from '@assets/logo-icon.svg';
import { Button, InputText, Text } from '@components/index';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as S from './styles';

export function Register() {
  const theme = useTheme();

  function handleRegister() {
    console.log('>>> handleSign');
  }

  function navigateToLogin() {
    console.log('>>> handleNewAccount');
  }

  function handleChangePhoto() {
    console.log('>>> handleChangePhoto');
  }

  return (
    <S.Container bounces={false}>
      <S.LogoWrapper>
        <LogoIcon width={60} height={40} />

        <Text size={20} fontFamily="karlaBold" color="gray_1" align="center">
          Boas vindas!
        </Text>
        <Text color="gray_2" align="center">
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </Text>
      </S.LogoWrapper>

      <S.FormWrapper>
        <TouchableWithoutFeedback onPress={handleChangePhoto}>
          <S.AvatarWrapper>
            <Feather name="user" size={30} color={theme.colors.gray_4} />

            <S.EditWrapper>
              <Feather name="edit-3" size={16} color={theme.colors.white} />
            </S.EditWrapper>
          </S.AvatarWrapper>
        </TouchableWithoutFeedback>

        <InputText placeholder="Nome" />

        <InputText placeholder="E-mail" keyboardType="email-address" />

        <InputText placeholder="Telefone" keyboardType="number-pad" />

        <InputText placeholder="Senha" secureTextEntry />

        <InputText placeholder="Confirmar senha" secureTextEntry />

        <S.ButtonWrapper>
          <Button bgColor="gray_1" onPress={handleRegister}>
            <Text>Criar</Text>
          </Button>
        </S.ButtonWrapper>
      </S.FormWrapper>

      <S.FooterWrapper>
        <Text color="gray_2">Já tenho uma conta</Text>

        <S.ButtonWrapper>
          <Button bgColor="gray_5" onPress={navigateToLogin}>
            <Text color="gray_2">Ir para o login</Text>
          </Button>
        </S.ButtonWrapper>
      </S.FooterWrapper>
    </S.Container>
  );
}
