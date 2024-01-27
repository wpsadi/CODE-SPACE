import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Person from './Person';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Person age="18" Name="Aditya"/>
  </React.StrictMode>
);
