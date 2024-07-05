import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Platform, Text, View } from 'react-native';
import { useTheme } from 'styled-components';
import { HomeStackRoutes } from './home.stack.routes';

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
      screenOptions={{
        tabBarActiveTintColor: theme.colors.gray_2,
        tabBarInactiveTintColor: theme.colors.gray_4,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.white
        }
      }}
    >
      <Screen
        name="home_tab"
        component={HomeStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          )
        }}
      />

      <Screen
        name="ad_tab"
        component={FakeTabContent}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tag" size={24} color={color} />
          )
        }}
      />

      <Screen
        name="logout_tab"
        component={FakeTabContent}
        options={{
          tabBarActiveTintColor: theme.colors.red_1,
          tabBarInactiveTintColor: theme.colors.red_1,
          tabBarIcon: () => (
            <MaterialIcons name="logout" size={24} color={theme.colors.red_1} />
          )
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
