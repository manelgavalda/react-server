// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Router from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
  <Provider store={store}>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
</Provider>,
  document.querySelector('#root')
);
