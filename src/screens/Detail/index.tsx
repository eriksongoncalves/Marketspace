import { SafeAreaView } from "react-native";

import { Carrousel } from "@components/Carrousel";
import { adsMock } from "@mocks/ads";
import * as S from "./styles";

const carrouselImages = adsMock.map(item => item.images[0]);

export function Detail() {
  return (
    <S.Container bounces={false}>
      <SafeAreaView>
        <Carrousel images={carrouselImages} />
      </SafeAreaView>
    </S.Container>
  );
}
