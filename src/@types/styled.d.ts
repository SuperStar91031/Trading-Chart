// @dev configuration to work with typescipt - https://styled-components.com/docs/api#typescript
import "styled-components";
import { ColorsEnum } from "styles";

interface ScreenProperties {
  screenSize: string;
  fontSize: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key in keyof typeof ColorsEnum]: string;
    };
    font: {
      size: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      weight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
        black: number;
      };
    };
    padding: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    margin: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    line: {
      height: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    zIndex: {
      navbar: string;
      modal: string;
      dropdown: string;
    };
    boxShadow: {
      one: string;
      two: string;
    };
    mediaQuery: {
      mobile: ScreenProperties;
      tablet: ScreenProperties;
      laptop: ScreenProperties;
      desktop: ScreenProperties;
      lgDesktop: ScreenProperties;
      xlDesktop: ScreenProperties;
    };
  }
}
