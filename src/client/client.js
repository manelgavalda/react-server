// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';

ReactDOM.hydrate(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.querySelector('#root')
);
