import { ITheme } from "../interfaces/theme";
import { textBold10, textBold12, textBold13, textBold20, textBolt15, textRegular12, textRegular13 } from "../constants/fonts-config";

export const BaseTheme: ITheme = {
  colors: {
    primary: '#FCA029'
  },
  gradients: {
    primary: 'linear-gradient(180deg, #FECA2F -49.19%, #FB8D27 100%)'
  },
  sizes: {
    defaultButtons: {
      height: 55,
      width: 227
    }
  },
  textBolt15: textBolt15,
  textRegular13: textRegular13,
  textBold13: textBold13,
  textBold20: textBold20,
  textBold12: textBold12,
  textRegular12: textRegular12,
  textBold10: textBold10,
}