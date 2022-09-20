export type TFontProperties = {
  family: string;
  size: number;
  lineHeight: number;
  weight: number;
};

export type TDefaultButtonProps = {
  margintop?: string;
  marginbottom?: string;
};

export type TAvatarImageProps = {
  height: number;
  border?: boolean;
};

export type TLogoProps = {
  marginbottom?: number;
};

export type TRadioButtonProps = {
  name: string;
  value: string;
  labelName?: string;
  checked?: boolean;
};

export type TTextAreaProps = {
  minHeight?: number;
};