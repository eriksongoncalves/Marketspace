import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Avatar, Button, InputText, Text } from '@components/index';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

export function Home() {
  const theme = useTheme();

  return (
    <S.Container bounces={false}>
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
          <MaterialCommunityIcons name="tag-outline" size={24} color="black" />

          <S.ActivityProductsInfo>
            <Text color="gray_2" size={20} fontFamily="karlaBold">
              4
            </Text>
            <Text color="gray_2" size={12}>
              anúncios ativos
            </Text>
          </S.ActivityProductsInfo>

          <S.TextButton onPress={() => {}}>
            <Text color="blue" size={12} fontFamily="karlaBold">
              Meus anúncios
            </Text>
            <AntDesign name="arrowright" size={24} color={theme.colors.blue} />
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

              <TouchableOpacity onPress={() => {}}>
                <Feather name="sliders" size={24} color="black" />
              </TouchableOpacity>
            </S.IconsWrapper>
          </S.InputWrapper>
        </S.FilterInputWrapper>
      </S.MyProductsInfo>
    </S.Container>
  );
}
