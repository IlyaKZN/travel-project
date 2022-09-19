import { FC } from 'react';
import Header from '../../components/header/header';
import DefaultLayout from '../../layouts/default-layout';
import ProfilePreview from '../../components/profile-preview/profile-preview';
import ProfileForm from '../../components/forms/profile-form';

const CreateProfilePage: FC = () => {
  return (
    <DefaultLayout>
      <Header title='Создание профиля' />
      <ProfilePreview />
      <ProfileForm />
    </DefaultLayout>
  )
};

export default CreateProfilePage;