import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List item={"No idea-why i-am writing-this...".split("-")}/>
  </React.StrictMode>
);

