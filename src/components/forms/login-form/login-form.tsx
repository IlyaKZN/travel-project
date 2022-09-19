import { FC } from 'react';
import { DefaultButton } from '../../../ui-kit/buttons/buttons';
import { FormTextInput } from '../../../ui-kit/inputs/inputs';
import { Form } from './login-form-styles';

const LoginForm: FC = () => {
  return (
    <Form>
      <FormTextInput labelname='Почта:' />
      <FormTextInput type='password' labelname='Пароль:' />
      <DefaultButton type='submit' margintop='75'>Войти</DefaultButton>
    </Form>
  )
};

export default LoginForm;