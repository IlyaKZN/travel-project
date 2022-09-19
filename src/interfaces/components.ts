import { InputHTMLAttributes } from 'react';

export interface IFormTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelname: string;
};

export interface IHeaderProps {
  title?: string;
};

export interface IAvatarProps {
  height: number;
  status?: string;
  border?: boolean;
}