import React, { FC } from 'react';
import { Logo } from './login-page-styles';
import DefaultLayout from '../../layouts/default-layout';
import Header from '../../components/header/header';
import logoImg from '../../assets/logo.svg';
import LoginForm from '../../components/forms/login-form';

const LoginPage: FC = () => {
  return (
    <DefaultLayout>
      <Header></Header>
      <Logo src={logoImg} marginbottom={56} />
      <LoginForm />
    </DefaultLayout>
  )
};

export default LoginPage;