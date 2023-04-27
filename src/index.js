import React from 'react';
import 'assets/scss/styles.scss';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router basename="/cryptorank-app">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
