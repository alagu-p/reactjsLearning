import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateTutorials from './StateTutorials';
import UseStatetutor from './UseStatetutor';
import UseEffectctsample from './UseEffectsample'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StateTutorials/>
    <UseStatetutor/>
    <UseEffectctsample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
