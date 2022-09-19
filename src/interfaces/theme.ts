import { TFontProperties } from "../types/style.types";

export interface ITheme {
  colors: {
    primary: string;
    inputBackground: string;
    inputText: string;
  },
  gradients: {
    primary: string;
  },
  sizes: {
    defaultButtons: {
      height: number;
      width: number;
    },
    textInputs: {
      height: number;
    }
  },
  textBolt15: TFontProperties,
  textRegular13: TFontProperties,
  textBold13: TFontProperties,
  textBold20: TFontProperties,
  textBold12: TFontProperties,
  textRegular12: TFontProperties,
  textBold10: TFontProperties,
}