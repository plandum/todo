import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/index.css';
import { store } from './store/index.ts';
import { MainPage } from './Pages/MainPage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
);
