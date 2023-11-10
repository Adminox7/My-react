import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './comp/Menu';
import Comp1 from './comp/Comp1';
import Comp2 from './comp/Comp2';
import Comp3 from './comp/Comp3';
import Comp4 from './comp/Comp4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <Comp4 />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
