import React, { FC } from 'react';
import { Logo } from './action-page-styles';
import DefaultLayout from '../../layouts/default-layout';
import Header from '../../components/header/header';
import logoImg from '../../assets/logo.svg';
import { DefaultButton } from '../../ui-kit/buttons/buttons';

const ActionPage: FC = () => {
  return (
    <DefaultLayout>
      <Header></Header>
      <Logo src={logoImg}/>
      <DefaultButton marginTop='107'>Войти</DefaultButton>
      <DefaultButton marginTop='50'>Зарегистрироваться</DefaultButton>
    </DefaultLayout>
  )
};

export default ActionPage;