import { FC } from "react";
import { IFormTextInputProps } from "../../interfaces/components";
import { Label, TextInput } from "./inputs-style";

const FormTextInput: FC<IFormTextInputProps> = ({
  type = 'inpue',
  labelname,
  value,
  onChange = () => {},
  disabled = false,
}) => {
  return (
    <Label>
      {labelname}
      <TextInput type={type} onChange={onChange} disabled={disabled}>{value}</TextInput>
    </Label>
  );
};

export { FormTextInput };
