import { theme } from "@theme/index";

// inferência de tipos
type Theme = typeof theme;

declare module "styled-components/native" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
