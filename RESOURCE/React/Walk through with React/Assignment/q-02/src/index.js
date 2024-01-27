import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './App';

const btn_magic = ()=>{
  alert("You clicked the button")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button text="Click this button to see magic" click={btn_magic} />
  </React.StrictMode>
);
