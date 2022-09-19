import React from 'react';
import 'normalize.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { RobotoFonts } from './vendor/fonts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RobotoFonts />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);