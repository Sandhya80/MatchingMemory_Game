import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './app/store.js';
import { Provider } from 'react-redux'; //importing Provider


ReactDOM.render(
  // Implement Provider component with store:
  <Provider store={store}>  
    <App /></Provider>,
  document.getElementById('root')
);
