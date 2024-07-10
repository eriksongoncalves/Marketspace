import { Karla_400Regular, Karla_700Bold, useFonts } from "@expo-google-fonts/karla";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "intl";
import { useCallback } from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";

import { Routes } from "@routes/index";
import { theme } from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor="transparent" />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
