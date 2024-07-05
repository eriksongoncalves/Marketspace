import { SafeAreaView } from "react-native";

import { Text } from "@components/index";
import * as S from "./styles";

export function Detail() {
  return (
    <S.Container bounces={false}>
      <SafeAreaView>
        <Text>DETALHES DO ANÚNCIO</Text>
      </SafeAreaView>
    </S.Container>
  );
}
