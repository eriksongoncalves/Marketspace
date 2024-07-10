import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";

import { Avatar, Button, Carrousel, Price, Tag, Text } from "@components/index";
import { adsMock } from "@mocks/ads";
import * as S from "./styles";

const carrouselImages = adsMock.map(item => item.images[0]);

export function Detail() {
  const theme = useTheme();
  const navigation = useNavigation();

  const isMyAd = true;
  const isAdActive = true;
  const isPreview = false;

  useEffect(() => {
    if (isMyAd && !isPreview) {
      navigation.setOptions({
        headerRight: () => (
          <TouchableWithoutFeedback onPress={() => navigation.navigate("ad_form")}>
            <AntDesign name="edit" size={22} color={theme.colors.gray_1} />
          </TouchableWithoutFeedback>
        )
      });
    }

    if (isPreview) {
      navigation.setOptions({
        headerShown: false
      });
    }

    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
    return () =>
      navigation.getParent()?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [isMyAd, isPreview, navigation, theme]);

  return (
    <>
      {isPreview && (
        <>
          <StatusBar translucent backgroundColor={theme.colors.blue_light} />
          <S.PreviewMessageContainer>
            <Text color="gray_7" size={16} fontFamily="karlaBold">
              Pré visualização do anúncio
            </Text>
            <Text color="gray_7">É assim que seu produto vai aparecer!</Text>
          </S.PreviewMessageContainer>
        </>
      )}

      <S.Container
        bounces={false}
        contentContainerStyle={{ paddingBottom: isMyAd && !isPreview ? 0 : 90 }}
      >
        <SafeAreaView>
          <S.CarrouselWrapper>
            <Carrousel images={carrouselImages} />

            {!isAdActive && !isPreview && (
              <S.CarrouselOverlay>
                <Text color="white" fontFamily="karlaBold">
                  ANÚNCIO DESATIVADO
                </Text>
              </S.CarrouselOverlay>
            )}
          </S.CarrouselWrapper>

          <S.Content>
            <S.SellerInfo>
              <Avatar
                size="small"
                borderColor="blue_light"
                uri="https://avatars.githubusercontent.com/u/13559274?v=4"
              />

              <Text color="gray_1">Erikson Gonçalves</Text>
            </S.SellerInfo>

            <S.AdContent>
              <Tag bgColor="gray_5" size="small">
                <Text color="gray_2" fontFamily="karlaBold">
                  NOVO
                </Text>
              </Tag>

              <S.TitleContainer>
                <Text color="gray_1" size={20} fontFamily="karlaBold">
                  Bicicleta
                </Text>

                <Price price={120} simbolSize={14} priceSize={20} color="blue_light" />
              </S.TitleContainer>

              <Text color="gray_2" align="justify">
                Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo
                eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan,
                euismod. Aenean leo nunc, purus iaculis in aliquam.
              </Text>

              <S.OtherInfos>
                <Text color="gray_2" fontFamily="karlaBold">
                  Aceita troca? <Text color="gray_2">Sim</Text>
                </Text>

                <S.PaymentWrapper>
                  <Text color="gray_2" fontFamily="karlaBold">
                    Meios de pagamento:
                  </Text>

                  <S.PaymentItem>
                    <Ionicons name="barcode-sharp" size={20} color={theme.colors.gray_1} />
                    <Text color="gray_2" fontFamily="karlaBold">
                      Boleto
                    </Text>
                  </S.PaymentItem>

                  <S.PaymentItem>
                    <MaterialCommunityIcons
                      name="bank-transfer"
                      size={20}
                      color={theme.colors.gray_1}
                    />
                    <Text color="gray_2" fontFamily="karlaBold">
                      Pix
                    </Text>
                  </S.PaymentItem>

                  <S.PaymentItem>
                    <MaterialIcons name="money" size={20} color={theme.colors.gray_1} />
                    <Text color="gray_2" fontFamily="karlaBold">
                      Dinheiro
                    </Text>
                  </S.PaymentItem>

                  <S.PaymentItem>
                    <AntDesign name="creditcard" size={20} color={theme.colors.gray_1} />
                    <Text color="gray_2" fontFamily="karlaBold">
                      Cartão de crédito
                    </Text>
                  </S.PaymentItem>

                  <S.PaymentItem>
                    <MaterialCommunityIcons
                      name="bank-outline"
                      size={20}
                      color={theme.colors.gray_1}
                    />
                    <Text color="gray_2" fontFamily="karlaBold">
                      Depósito Bancário
                    </Text>
                  </S.PaymentItem>
                </S.PaymentWrapper>
              </S.OtherInfos>

              {isMyAd && !isPreview && (
                <S.MyAdActions>
                  <Button bgColor={isAdActive ? "gray_1" : "blue_light"} onPress={() => {}}>
                    <Feather name="power" size={16} color={theme.colors.gray_6} />
                    <Text color="white" fontFamily="karlaBold">
                      {isAdActive ? "Desativar anúncio" : "Reativar anúncio"}
                    </Text>
                  </Button>

                  <Button bgColor="gray_5" onPress={() => {}}>
                    <Feather name="trash" size={16} color={theme.colors.gray_3} />
                    <Text color="gray_2" fontFamily="karlaBold">
                      Excluir anúncio
                    </Text>
                  </Button>
                </S.MyAdActions>
              )}
            </S.AdContent>
          </S.Content>
        </SafeAreaView>
      </S.Container>

      {!isMyAd && (
        <S.BottomAction>
          <Price price={120} color="blue" simbolSize={14} priceSize={24} />

          <S.ButtonWrapper>
            <Button onPress={() => {}}>
              <Ionicons name="logo-whatsapp" size={20} color={theme.colors.white} />
              <Text color="gray_7" fontFamily="karlaBold">
                Entrar em contato
              </Text>
            </Button>
          </S.ButtonWrapper>
        </S.BottomAction>
      )}

      {isPreview && (
        <S.BottomAction>
          <Button bgColor="gray_5" onPress={navigation.goBack}>
            <AntDesign name="arrowleft" size={16} color={theme.colors.gray_2} />
            <Text color="gray_2" fontFamily="karlaBold">
              Voltar e editar
            </Text>
          </Button>

          <Button onPress={() => {}}>
            <AntDesign name="tago" size={16} color={theme.colors.white} />
            <Text color="gray_7" fontFamily="karlaBold">
              Publicar
            </Text>
          </Button>
        </S.BottomAction>
      )}
    </>
  );
}
