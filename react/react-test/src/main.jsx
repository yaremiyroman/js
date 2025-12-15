import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import ThemeProvider from './providers/ThemeProvider.jsx';

import router from './router.jsx';

import './styles/reset.css';
import './styles/basic.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
