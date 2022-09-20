import { FC } from 'react';
import { DefaultButton } from '../../ui-kit/buttons/buttons';
import { FormTextInput } from '../../ui-kit/inputs/inputs';
import { Form, FormLink, FormText } from './form-styles';

const LoginForm: FC = () => {
  return (
    <Form>
      <FormTextInput labelname='Почта:' />
      <FormTextInput type='password' labelname='Пароль:' />
      <FormText>Вы - новый пользователь?</FormText>
      <FormLink to='/registration'>Зарегистрироваться</FormLink>
      <DefaultButton type='submit' margintop='30'>Войти</DefaultButton>
    </Form>
  )
};

export default LoginForm;