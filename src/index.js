import React from 'react';
import { createRoot } from 'react-dom/client';
import  Form  from './Pages/Form/form';
import Home from './Pages/Home/home';
import Welcome from './Pages/Welcome/welcome';
import './i18next'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/Login' element={<Form />}></Route>
        <Route path = '/Welcome' element={<Welcome />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

