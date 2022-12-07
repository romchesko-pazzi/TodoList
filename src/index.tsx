import React from 'react';

import ReactDOM from 'react-dom/client';
import './assets/sass/_main.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import reportWebVitals from './reportWebVitals';
import { store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
reportWebVitals();
