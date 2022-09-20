import { FC } from 'react';
import { RadioInput, RadioLabel, RadioLabelContainer } from './inputs-style';
import { TRadioButtonProps } from '../../types/style.types';
import { nanoid } from '@reduxjs/toolkit';

const RadioButton: FC<TRadioButtonProps> = ({ name, value, labelName, checked }) => {

  const id = nanoid();

  return (
    <RadioLabelContainer>
      <RadioInput id={id} type='radio' value={value} name={name} checked={checked} />
      <RadioLabel htmlFor={id}>
        {labelName}
      </RadioLabel>
    </RadioLabelContainer>
  )
};

export default RadioButton;