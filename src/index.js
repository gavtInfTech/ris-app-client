import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { AuthProvider } from './contexts/AuthContext';
import App from './App';
import { MessageProvider } from './contexts/MessageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <MessageProvider>
      <App />
    </MessageProvider>
  </AuthProvider>
);