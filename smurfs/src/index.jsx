// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
// Store
import store from './app/store';
// Components
import App from './app/App';
// UI
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
