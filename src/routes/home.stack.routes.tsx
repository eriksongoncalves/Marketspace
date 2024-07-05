import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail } from "@screens/Detail";
import { Home } from "@screens/Home";

const Stack = createNativeStackNavigator();

export function HomeStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detail" component={Detail} />
    </Stack.Navigator>
  );
}
