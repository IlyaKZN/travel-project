import React from 'react';
import { Routes, Route } from 'react-router';
import { ThemeProvider } from 'styled-components'
import { BaseTheme } from '../themes/theme';
import GlobalStyles from '../global-styles/global-styles';
import ActionPage from '../pages/action-page/action-page';
import Navigation from '../components/navigation/navigation';
import LoginPage from '../pages/login-page/login-page';
import CreateProfilePage from '../pages/create-profile-page/create-profile-page';

function App () {
  return (
    <>
    <ThemeProvider theme={BaseTheme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<ActionPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create-profile' element={<CreateProfilePage />} />
      </Routes>
      <Navigation />
    </ThemeProvider>
    </>
  );
}

export default App;
