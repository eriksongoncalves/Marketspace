import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Avatar, Button, Text } from '@components/index';
import * as S from './styles';

export function Home() {
  const theme = useTheme();

  return (
    <S.Container bounces={false}>
      <S.Header>
        <S.WellcomeWrapper>
          <Avatar
            size="large"
            uri="https://randomuser.me/api/portraits/women/56.jpg"
          />

          <S.WellcomeTexts>
            <Text size={16}>Boas vindas,</Text>
            <Text size={16} fontFamily="karlaBold">
              Maria!
            </Text>
          </S.WellcomeTexts>
        </S.WellcomeWrapper>

        <Button onPress={() => {}}>
          <Feather name="plus" size={24} color={theme.colors.white} />
          <Text size={16} color="white">
            Criar anúncio
          </Text>
        </Button>
      </S.Header>
    </S.Container>
  );
}
