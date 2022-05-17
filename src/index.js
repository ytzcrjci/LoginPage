import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);

reportWebVitals();
