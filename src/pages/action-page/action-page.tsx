import React, { FC } from 'react';
import { Logo } from './action-page-styles';
import DefaultLayout from '../../layouts/default-layout';
import Header from '../../components/header/header';
import logoImg from '../../assets/logo.svg';
import { DefaultLink } from '../../ui-kit/links/links';

const ActionPage: FC = () => {
  return (
    <DefaultLayout>
      <Header></Header>
      <Logo marginbottom={107} src={logoImg}/>
      <DefaultLink to='/login'>Войти</DefaultLink>
      <DefaultLink to='/auth' margintop='50'>Зарегистрироваться</DefaultLink>
    </DefaultLayout>
  )
};

export default ActionPage;