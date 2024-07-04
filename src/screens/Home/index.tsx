import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, LogBox, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import {
  AdsItem,
  Avatar,
  Button,
  Checkbox,
  InputText,
  Tag,
  Text
} from '@components/index';
import { adsMock } from '../../mocks/ads';
import * as S from './styles';

const PAYMENT_METHODS = [
  'Boleto',
  'Pix',
  'Dinheiro',
  'Cartão de crédito',
  'Depósito bancário'
];

enum Condition {
  NEW = 'NEW',
  USED = 'USED'
}

export function Home() {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const [paymentMethodsSelected, setPaymentMethodsSelected] = useState<
    string[]
  >([]);
  const [condition, setCondition] = useState<Condition | undefined>();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['70%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const toggleSwitch = useCallback(
    () => setIsEnabled(previousState => !previousState),
    []
  );

  const changeCondition = (value: Condition) => {
    const newValue = value === condition ? undefined : value;

    setCondition(newValue);
  };

  const handleSelectPaymentMethod = (value: string) => {
    const values = new Set([...paymentMethodsSelected, value]);

    if (paymentMethodsSelected.includes(value)) {
      values.delete(value);
    }

    setPaymentMethodsSelected(Array.from(values));
  };

  const makeTag = (tagType: Condition, tagLabel: string) => {
    const isSelected = condition === tagType;

    return (
      <Tag
        bgColor={isSelected ? 'blue_light' : 'gray_5'}
        size="large"
        onPress={() => changeCondition(tagType)}
      >
        <Text color={isSelected ? 'white' : 'gray_3'} fontFamily="karlaBold">
          {tagLabel}
        </Text>

        {condition === tagType && (
          <AntDesign name="closecircle" size={13} color={theme.colors.white} />
        )}
      </Tag>
    );
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <BottomSheetModalProvider>
      <S.Container bounces={false}>
        <S.SafeAreaView>
          <S.Header>
            <S.WellcomeWrapper>
              <Avatar
                size="medium"
                uri="https://randomuser.me/api/portraits/women/56.jpg"
              />

              <S.WellcomeTexts>
                <Text color="gray_1" size={16}>
                  Boas vindas,
                </Text>
                <Text color="gray_1" size={16} fontFamily="karlaBold">
                  Maria!
                </Text>
              </S.WellcomeTexts>
            </S.WellcomeWrapper>

            <S.ButtonWrapper>
              <Button onPress={() => {}} bgColor="gray_1">
                <Feather name="plus" size={24} color={theme.colors.white} />
                <Text size={16} color="white" fontFamily="karlaBold">
                  Criar anúncio
                </Text>
              </Button>
            </S.ButtonWrapper>
          </S.Header>

          <S.MyProductsInfo>
            <Text color="gray_3">Seus produtos anunciados para venda</Text>

            <S.MyProductsInfoBox>
              <MaterialCommunityIcons
                name="tag-outline"
                size={24}
                color="black"
              />

              <S.ActivityProductsInfo>
                <Text color="gray_2" size={20} fontFamily="karlaBold">
                  4
                </Text>
                <Text color="gray_2" size={12}>
                  anúncios ativos
                </Text>
              </S.ActivityProductsInfo>

              <S.TextButton onPress={() => {}}>
                <Text color="blue" fontFamily="karlaBold">
                  Meus anúncios
                </Text>
                <AntDesign
                  name="arrowright"
                  size={24}
                  color={theme.colors.blue}
                />
              </S.TextButton>
            </S.MyProductsInfoBox>

            <S.FilterInputWrapper>
              <Text color="gray_3">Compre produtos variados</Text>

              <S.InputWrapper>
                <S.Input>
                  <InputText
                    placeholder="Buscar anúncio"
                    noBorders
                    onSubmitEditing={() => {}}
                  />
                </S.Input>

                <S.IconsWrapper>
                  <TouchableOpacity onPress={() => {}}>
                    <Feather name="search" size={24} color="black" />
                  </TouchableOpacity>

                  <S.VerticalDivider />

                  <TouchableOpacity onPress={handlePresentModalPress}>
                    <Feather name="sliders" size={24} color="black" />
                  </TouchableOpacity>
                </S.IconsWrapper>
              </S.InputWrapper>
            </S.FilterInputWrapper>
          </S.MyProductsInfo>

          <S.AdsWrapper>
            <FlatList
              data={adsMock}
              keyExtractor={item => String(item.id)}
              numColumns={2}
              renderItem={({ item }) => (
                <AdsItem data={item} onPress={() => {}} />
              )}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              bounces={false}
            />
          </S.AdsWrapper>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={{
              borderRadius: 28,
              overflow: 'hidden'
            }}
            containerStyle={{ backgroundColor: 'rgba(0,0,0,.7)' }}
            backgroundStyle={{ backgroundColor: theme.colors.gray_6 }}
          >
            <BottomSheetScrollView
              contentContainerStyle={{
                backgroundColor: theme.colors.gray_6,
                flexGrow: 1
              }}
            >
              <S.BottomSheetContent>
                <S.BottomSheetHeader>
                  <Text color="gray_1" size={20} fontFamily="karlaBold">
                    Filtrar anúncios
                  </Text>

                  <TouchableOpacity
                    onPress={() => bottomSheetModalRef.current?.dismiss()}
                  >
                    <AntDesign
                      name="close"
                      size={24}
                      color={theme.colors.gray_4}
                    />
                  </TouchableOpacity>
                </S.BottomSheetHeader>

                <S.ConditionWrapper>
                  <Text color="gray_2" fontFamily="karlaBold">
                    Condição
                  </Text>

                  <S.TagsContainer>
                    {makeTag(Condition.NEW, 'NOVO')}
                    {makeTag(Condition.USED, 'USADO')}
                  </S.TagsContainer>
                </S.ConditionWrapper>

                <S.AcceptExchange>
                  <Text color="gray_2" fontFamily="karlaBold">
                    Aceita Troca?
                  </Text>

                  <Switch
                    trackColor={{
                      false: theme.colors.gray_5,
                      true: theme.colors.blue_light
                    }}
                    thumbColor={
                      isEnabled ? theme.colors.gray_7 : theme.colors.gray_7
                    }
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

                <S.BottomSheetFooter>
                  <Button bgColor="gray_5">
                    <Text color="gray_2">Resetar filtros</Text>
                  </Button>
                  <Button bgColor="gray_1">
                    <Text color="white">Aplicar filtros</Text>
                  </Button>
                </S.BottomSheetFooter>
              </S.BottomSheetContent>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </S.SafeAreaView>
      </S.Container>
    </BottomSheetModalProvider>
  );
}
