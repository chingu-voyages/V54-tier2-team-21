import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyIOSFixes } from './utils/iosCompatibility';

applyIOSFixes();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);