import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import AppProviders from './providers/AppProviders';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <RouterProvider router={router}/>
    </AppProviders>
  </StrictMode>,
)