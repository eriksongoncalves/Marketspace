import { SafeAreaView } from "react-native";

import LogoIcon from "@assets/logo-icon.svg";
import { Avatar, Button, InputText, Text } from "@components/index";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

export function Register() {
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate("app");
  }

  function navigateToLogin() {
    navigation.navigate("signin");
  }

  function handleChangePhoto() {
    console.log(">>> handleChangePhoto");
  }

  return (
    <S.Container bounces={false}>
      <SafeAreaView>
        <S.LogoWrapper>
          <LogoIcon width={60} height={40} />

          <Text size={20} fontFamily="karlaBold" color="gray_1" align="center">
            Boas vindas!
          </Text>
          <Text color="gray_2" align="center">
            Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
          </Text>
        </S.LogoWrapper>

        <S.FormWrapper>
          <Avatar size="large" onEditPress={handleChangePhoto} />

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
      </SafeAreaView>
    </S.Container>
  );
}
