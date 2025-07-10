import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {SettingProvider, AuthProvider} from './context/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingProvider>
    <AuthProvider>
              <App />
    </AuthProvider>
  </SettingProvider>
);

