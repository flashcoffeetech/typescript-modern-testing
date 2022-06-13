import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import('./mocks/browser').then(({ worker }) => {
  if (window.Cypress) {
    worker.start({ onUnhandledRequest: 'bypass' });
    window.appReady = true;
  }
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
