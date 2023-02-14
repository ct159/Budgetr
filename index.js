import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import SignUp from './components/SignUp'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <React.StrictMode>
          <Routes>
          <Route path = '/' element = {<App/>}/>
          <Route path = '/home' element = {<App/>}/>
          </Routes>
  </React.StrictMode>
  </BrowserRouter>
  </>
);

