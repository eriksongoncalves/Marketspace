import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";
import { Platform, TouchableWithoutFeedback, View } from "react-native";
import { useTheme } from "styled-components";

import { Text } from "@components/index";
import { AdForm } from "@screens/AdForm";
import { Detail } from "@screens/Detail";
import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";

export type BottomTabParamListBase = {
  home_tab: undefined;
  ad_tab: undefined;
  logout_tab: undefined;
  detail: undefined;
  ad_form: { id?: string } | undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamListBase>();

function FakeTabContent() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Tab</Text>
    </View>
  );
}

function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      backBehavior="none"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.gray_2,
        tabBarInactiveTintColor: theme.colors.gray_4,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 60,
          backgroundColor: theme.colors.white
        }
      }}
    >
      <Screen
        name="home_tab"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
        }}
      />

      <Screen
        name="ad_tab"
        component={MyAds}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.colors.gray_6
          },
          headerShadowVisible: false,
          headerTitle: () => (
            <Text color="gray_1" fontFamily="karlaBold" size={20}>
              Meus anúncios
            </Text>
          ),
          headerRightContainerStyle: { paddingRight: 24 },
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate("ad_form")}>
              <AntDesign name="plus" size={22} color={theme.colors.gray_1} />
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ color }) => <FontAwesome5 name="tag" size={20} color={color} />
        })}
      />

      <Screen
        name="logout_tab"
        component={FakeTabContent}
        options={{
          tabBarActiveTintColor: theme.colors.red_1,
          tabBarInactiveTintColor: theme.colors.red_1,
          tabBarIcon: () => <MaterialIcons name="logout" size={24} color={theme.colors.red_1} />
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.goBack();
          }
        })}
      />

      <Screen
        name="detail"
        component={Detail}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.gray_6
          },
          headerLeftContainerStyle: { paddingLeft: 24 },
          headerRightContainerStyle: { paddingRight: 24 },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "",
          tabBarButton: () => null,
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <AntDesign name="arrowleft" size={24} color={theme.colors.gray_1} />
            </TouchableWithoutFeedback>
          )
        })}
      />

      <Screen
        name="ad_form"
        component={AdForm}
        options={({ route, navigation }) => {
          // const id = navigation.
          const isEditing = route.params?.id;

          return {
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.colors.gray_6
            },
            headerLeftContainerStyle: { paddingLeft: 24 },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            title: !isEditing ? "Criar anúncio" : "Editar anúncio",
            tabBarButton: () => null,
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <AntDesign name="arrowleft" size={24} color={theme.colors.gray_1} />
              </TouchableWithoutFeedback>
            )
          };
        }}
      />
    </Navigator>
  );
}

export default AppTabRoutes;
