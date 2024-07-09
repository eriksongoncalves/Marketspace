import { useState } from "react";
import { Dimensions, FlatList, Image } from "react-native";
import * as S from "./styles";

type CarrouselProps = {
  images: string[];
};

export function Carrousel({ images }: CarrouselProps) {
  const { width: screenWith } = Dimensions.get("screen");
  const [itemActive, setItemActive] = useState(0);

  return (
    <S.Wrapper>
      <FlatList
        onScrollEndDrag={event => {
          const totalWidth = event.nativeEvent.layoutMeasurement.width;
          const xPosition = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(xPosition / totalWidth);
          if (newIndex !== itemActive) {
            setItemActive(newIndex);
          }
        }}
        horizontal
        data={images}
        // keyExtractor={item => String(item.id)}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <S.Item style={{ flex: 1, width: screenWith }}>
            <Image
              source={{ uri: item }}
              width={screenWith}
              height={280}
              resizeMode="stretch"
              resizeMethod="scale"
            />
          </S.Item>
        )}
      />
      <S.Indicators>
        {images.map((_, idx) => (
          <S.Indicator key={idx} isActive={itemActive === idx} />
        ))}
      </S.Indicators>
    </S.Wrapper>
  );
}
