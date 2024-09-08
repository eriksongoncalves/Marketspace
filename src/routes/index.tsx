import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AuthStackRoutes } from "./auth.stack.routes";

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ["marketspace://", "com.teste.marketspace://"],
  config: {
    screens: {
      app: {
        path: "/app",
        exact: true,
        screens: {
          initialRouteName: "home_tab",
          detail: {
            path: "/app/detail/:id",
            parse: {
              id: (id: string) => id
            },
            exact: false
          }
        }
      }
    }
  }
};

export function Routes() {
  return (
    <NavigationContainer linking={linking}>
      <AuthStackRoutes />
    </NavigationContainer>
  );
}
