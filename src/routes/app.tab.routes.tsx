import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text } from "@components/index";
import { useNavigation } from "@react-navigation/native";
import { MyAds } from "@screens/MyAds";
import * as React from "react";
import { Platform, TouchableWithoutFeedback, View } from "react-native";
import { useTheme } from "styled-components";
import { HomeStackRoutes } from "./home.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

function FakeTabContent() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Tab</Text>
    </View>
  );
}

function AppTabRoutes() {
  const theme = useTheme();
  const navigation = useNavigation();

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
        component={HomeStackRoutes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
        }}
      />

      <Screen
        name="ad_tab"
        component={MyAds}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: theme.colors.gray_6
          },
          headerShadowVisible: false,
          headerRightContainerStyle: {
            marginRight: 24
          },
          headerTitle: () => (
            <Text color="gray_1" fontFamily="karlaBold" size={20}>
              Meus anúncios
            </Text>
          ),
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate("ad_form")}>
              <AntDesign name="plus" size={22} color={theme.colors.gray_1} />
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ color }) => <FontAwesome5 name="tag" size={20} color={color} />
        }}
      />

      <Screen
        name="logout_tab"
        component={FakeTabContent}
        options={{
          tabBarActiveTintColor: theme.colors.red_1,
          tabBarInactiveTintColor: theme.colors.red_1,
          tabBarIcon: () => <MaterialIcons name="logout" size={24} color={theme.colors.red_1} />
        }}
        listeners={{
          tabPress: () => {
            navigation.goBack();
          }
        }}
      />
    </Navigator>
  );
}

export default AppTabRoutes;
