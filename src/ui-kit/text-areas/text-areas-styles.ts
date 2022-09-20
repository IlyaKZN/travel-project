import styled from "styled-components";
import { TTextAreaProps } from "../../types/style.types";

const TextArea = styled.textarea<TTextAreaProps>`
  resize: none;
  border: none;
  width: 100%;
  outline: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  min-height: ${({ minHeight }) => minHeight}px;
  font-family: ${({ theme }) => theme.textRegular13.family};
  font-size: ${({ theme }) => theme.textRegular13.size}px;
  line-height: ${({ theme }) => theme.textRegular13.lineHeight}px;
  font-weight: ${({ theme }) => theme.textRegular13.weight};
  color: ${({ theme }) => theme.colors.inputText};
  padding: 11px 5px 10px;
`;

export { TextArea };