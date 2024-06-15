import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from 'react-use-cart';
import UserContaxtProvider from './context/UserContaxt';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContaxtProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </UserContaxtProvider>
  </React.StrictMode>
);


