import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import App from './App';

const rootElement = document.getElementById('root');

// adicionar o elemento raiz da aplicação para o Modal
Modal.setAppElement(rootElement);

// usar createRoot ao invés de render
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

