import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Switch } from "react-native";
import { useTheme } from "styled-components";

import { Button, Checkbox, InputText, PhotoThumb, Radio, Text } from "@components";
import { Condition } from "@shared/types/enums";
import { PAYMENT_METHODS } from "@shared/utils/constants";
import * as S from "./styles";

export function AdForm() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const [paymentMethodsSelected, setPaymentMethodsSelected] = useState<string[]>([]);
  const [productCondiction, setProductCondiction] = useState<Condition>();

  const toggleSwitch = useCallback(() => setIsEnabled(previousState => !previousState), []);

  const handleSelectPaymentMethod = (value: string) => {
    const values = new Set([...paymentMethodsSelected, value]);

    if (paymentMethodsSelected.includes(value)) {
      values.delete(value);
    }

    setPaymentMethodsSelected(Array.from(values));
  };

  function onLoadPhoto() {
    console.log(">>> onLoadPhoto");
  }

  function onRemovePhoto() {
    console.log(">>> onRemovePhoto");
  }

  useEffect(() => {
    navigation?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
  }, [navigation]);

  return (
    <S.Container bounces={false}>
      <SafeAreaView>
        <S.Content>
          <Text color="gray_2" fontFamily="karlaBold" size={16} mb={4}>
            Imagens
          </Text>
          <Text color="gray_3" mb={16}>
            Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
          </Text>

          <S.Thumbs>
            <PhotoThumb
              photoUri="https://post.healthline.com/wp-content/uploads/2019/12/Woman-Riding-Rented-Bicycle-In-A-City.-Cycling-and-smiling-1296x728-header-1296x728.jpg"
              onRemovePhoto={onRemovePhoto}
              onLoadPhoto={onLoadPhoto}
            />

            <PhotoThumb photoUri="" onRemovePhoto={onRemovePhoto} onLoadPhoto={onLoadPhoto} />
          </S.Thumbs>

          <S.Form>
            <Text color="gray_2" fontFamily="karlaBold" size={16}>
              Sobre o produto
            </Text>

            <InputText placeholder="Título do anúncio" />

            <InputText
              placeholder="Descrição do anúncio"
              multiline
              style={{ height: 160, textAlignVertical: "top" }}
            />

            <Text color="gray_2" fontFamily="karlaBold" size={16}>
              Venda
            </Text>

            <S.RadioWrapper>
              <Radio
                label="Produto novo"
                isChecked={productCondiction === Condition.NEW}
                onPress={() => setProductCondiction(Condition.NEW)}
              />
              <Radio
                label="Produto usado"
                isChecked={productCondiction === Condition.USED}
                onPress={() => setProductCondiction(Condition.USED)}
              />
            </S.RadioWrapper>

            <S.AcceptExchange>
              <Text color="gray_2" fontFamily="karlaBold">
                Aceita Troca?
              </Text>

              <Switch
                trackColor={{
                  false: theme.colors.gray_5,
                  true: theme.colors.blue_light
                }}
                thumbColor={isEnabled ? theme.colors.gray_7 : theme.colors.gray_7}
                ios_backgroundColor={theme.colors.gray_5}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </S.AcceptExchange>

            <S.PaymentMethosWrapper>
              <Text color="gray_2" fontFamily="karlaBold">
                Meios de pagamento aceitos
              </Text>

              {PAYMENT_METHODS.map(item => (
                <Checkbox
                  key={item}
                  label={item}
                  isChecked={paymentMethodsSelected.includes(item)}
                  onPress={() => handleSelectPaymentMethod(item)}
                />
              ))}
            </S.PaymentMethosWrapper>
          </S.Form>
        </S.Content>

        <S.BottomAction>
          <Button bgColor="gray_5" onPress={navigation.goBack}>
            <Text color="gray_2" fontFamily="karlaBold">
              Cancelar
            </Text>
          </Button>

          <Button onPress={() => {}} bgColor="gray_1">
            <Text color="gray_7" fontFamily="karlaBold">
              Avançar
            </Text>
          </Button>
        </S.BottomAction>
      </SafeAreaView>
    </S.Container>
  );
}
