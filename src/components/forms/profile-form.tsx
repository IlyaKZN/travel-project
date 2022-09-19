import { FC } from 'react';
import { DefaultButton } from '../../ui-kit/buttons/buttons';
import { FormTextInput } from '../../ui-kit/inputs/inputs';
import { Form } from './form-styles';

const ProfileForm: FC = () => {
  return (
    <Form>
      <FormTextInput type='text' labelname='Имя:' />
      <FormTextInput type='text' labelname='Фамилия:' />
      <FormTextInput type='text' labelname='Возраст:' />
      <FormTextInput type='text' labelname='Номер телефона:' />
      <FormTextInput type='text' labelname='Почта:' />
      <FormTextInput type='password' labelname='Пароль:' />
      <DefaultButton type='submit' margintop='75'>Создать профиль</DefaultButton>
    </Form>
  )
};

export default ProfileForm;