import { FC, ChangeEventHandler } from 'react';
import { DefaultButton } from '../../ui-kit/buttons/buttons';
import { FormTextInput } from '../../ui-kit/inputs/inputs';
import RadioButton from '../../ui-kit/inputs/radio-buttons';
import { TextArea } from '../../ui-kit/text-areas/text-areas-styles';
import { Form, RadioButtonsContainer, FormFieldDescription, FormFieldContainer } from './form-styles';

const ProfileForm: FC = () => {

  const onChangeBody : ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    // eslint-disable-next-line no-param-reassign
    evt.target.style.height = 'auto';
    evt.target.style.height = `${evt.target.scrollHeight}px`;
  };

  return (
    <Form>
      <FormTextInput type='text' labelname='Имя:' />
      <FormTextInput type='text' labelname='Фамилия:' />
      <FormFieldContainer>
        <FormFieldDescription>Пол:</FormFieldDescription>
        <RadioButtonsContainer>
          <RadioButton name="radio" value="Мужской" checked labelName='М'/>
          <RadioButton name="radio" value="Женский" labelName='Ж' />
        </RadioButtonsContainer>
      </FormFieldContainer>
      <FormTextInput type='text' labelname='Возраст:' />
      <FormTextInput type='text' labelname='Номер телефона:' />
      <FormTextInput type='text' labelname='Почта:' />
      <FormTextInput type='password' labelname='Пароль:' />
      <FormFieldContainer>
        <FormFieldDescription>О себе:</FormFieldDescription>
        <TextArea onChange={onChangeBody}/>
      </FormFieldContainer>
      <DefaultButton type='submit'>Создать профиль</DefaultButton>
    </Form>
  )
};

export default ProfileForm;