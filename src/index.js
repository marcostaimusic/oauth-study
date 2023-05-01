import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Bringing in the GoogleOAuthProvider from the package
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="516113137194-p0upked7fto9ua4mc6km6f3ih5b2kgds.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

