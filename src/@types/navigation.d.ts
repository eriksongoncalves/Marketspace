import { BottomTabParamListBase } from "@routes/app.tab.routes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamListBase {
      signin: undefined;
      register: undefined;
      app: undefined;
    }
  }
}
