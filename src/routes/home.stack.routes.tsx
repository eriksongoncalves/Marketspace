import AntDesign from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from "react-native";

import { Detail } from "@screens/Detail";
import { Home } from "@screens/Home";
import { useTheme } from "styled-components";

const Stack = createNativeStackNavigator();

export function HomeStackRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.gray_6
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "",
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableWithoutFeedback>
          )
        })}
      />
    </Stack.Navigator>
  );
}
