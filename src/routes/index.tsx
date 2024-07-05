import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AuthStackRoutes } from "./auth.stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStackRoutes />
    </NavigationContainer>
  );
}
