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

const RadioLabelContainer = styled.div`
  margin-left: 16px;
  height: 39px;
  width: 34px;
  position: relative;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  font-family: ${({ theme }) => theme.textRegular13.family};
  font-size: ${({ theme }) => theme.textRegular13.size}px;
  line-height: ${({ theme }) => theme.textRegular13.lineHeight}px;
  font-weight: ${({ theme }) => theme.textRegular13.weight};
  color: ${({ theme }) => theme.colors.inputText};
`;

const RadioInput = styled.input`
  opacity: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  &:checked + ${RadioLabel} {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export { Label, TextInput, RadioInput, RadioLabel, RadioLabelContainer };