import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { Provider } from 'react-redux';

import router from './router.jsx';
import store from './store.js';

import { Loader } from './components/index.jsx';

import './styles/reset.css';
import './styles/styles.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
);
