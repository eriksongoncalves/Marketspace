import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList } from "react-native";
import { Dropdown, IDropdownRef } from "react-native-element-dropdown";

import { AdsItem, Text } from "@components/index";
import { useTheme } from "styled-components";
import { adsMock } from "../../mocks/ads";
import * as S from "./styles";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" }
];

export function MyAds() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [value, setValue] = useState<string>();
  const ref = useRef<IDropdownRef>(null);

  return (
    <S.Container>
      <S.Filter>
        <Text color="gray_2">4 anúncios</Text>

        <S.Select>
          <Dropdown
            ref={ref}
            data={data}
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: theme.colors.gray_3,
              padding: 8
            }}
            containerStyle={{
              top: 20
            }}
            dropdownPosition="bottom"
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Todos"
            value={value}
            closeModalWhenSelectedItem={false}
            onChange={item => {
              setValue(item.value);
              ref.current?.close();
            }}
          />
        </S.Select>
      </S.Filter>

      <FlatList
        data={adsMock}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => (
          <AdsItem
            data={item}
            onPress={() => navigation.navigate("ad_form", { id: String(item.id) })}
          />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        bounces={false}
      />
    </S.Container>
  );
}
