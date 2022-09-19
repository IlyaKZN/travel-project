import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.textRegular13.family};
  font-size: ${({ theme }) => theme.textRegular13.size}px;
  line-height: ${({ theme }) => theme.textRegular13.lineHeight}px;
  font-weight: ${({ theme }) => theme.textRegular13.weight};
  gap: 5px;
  width: 100%;
`;

const TextInput = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.sizes.textInputs.height}px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: none;
  border-radius: 12px;
  padding: 11px 5px 10px;
  font-family: ${({ theme }) => theme.textRegular13.family};
  font-size: ${({ theme }) => theme.textRegular13.size}px;
  line-height: ${({ theme }) => theme.textRegular13.lineHeight}px;
  font-weight: ${({ theme }) => theme.textRegular13.weight};
  color: ${({ theme }) => theme.colors.inputText};

  :focus-visible {
    outline: none;
  }
`;

export { Label, TextInput };