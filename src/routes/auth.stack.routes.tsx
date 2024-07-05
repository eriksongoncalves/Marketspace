import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "@screens/Register";
import { SignIn } from "@screens/SignIn";
import AppTabRoutes from "./app.tab.routes";

const Stack = createNativeStackNavigator();

export function AuthStackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="app" component={AppTabRoutes} />
    </Stack.Navigator>
  );
}
