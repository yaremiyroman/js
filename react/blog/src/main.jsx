import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";

import { Provider } from 'react-redux';

import LanguageProvider from './providers/LanguageProvider.jsx';

import router from './router.jsx';

import store from './store.js';

import './styles/reset.css';
import './styles/common.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LanguageProvider> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* </LanguageProvider> */}
  </StrictMode>,
);
