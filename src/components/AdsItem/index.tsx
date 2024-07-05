import { Avatar } from "@components/Avatar";
import { Tag } from "@components/Tag";
import { Text } from "@components/Text";
import { Ad } from "@shared/types/ads";
import { formatPrice } from "@shared/utils/format-price";
import * as S from "./styles";

type AdsItemProps = {
  data: Ad;
  onPress: () => void;
};

export function AdsItem({ data, onPress }: AdsItemProps) {
  return (
    <S.Container onPress={onPress}>
      <S.ExtraInfoWrapper>
        <Avatar size="small" borderColor="white" uri={data.userImageUrl} />

        <S.TagWrapper>
          <Tag size="small" bgColor={data.isNew ? "blue" : "gray_2"}>
            <Text color="white" trasnform="uppercase" size={10}>
              {data.isNew ? "NOVO" : "USADO"}
            </Text>
          </Tag>
        </S.TagWrapper>
      </S.ExtraInfoWrapper>
      <S.Image source={{ uri: data.images[0] }} resizeMode="cover" />

      <S.Info>
        <Text color="gray_2">{data.title}</Text>

        <S.Price>
          <Text color="gray_1" fontFamily="karlaBold" size={16}>
            <Text color="gray_1" fontFamily="karlaBold" size={12}>
              R$
            </Text>
            {` ${formatPrice(data.price)}`}
          </Text>
        </S.Price>
      </S.Info>
    </S.Container>
  );
}
