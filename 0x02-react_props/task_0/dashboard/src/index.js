import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';

const rootDiv = document.getElementById('root');

console.log('el rootDiv is', rootDiv);

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <div id='root-notifications'></div>
    <App />
  </React.StrictMode>,
);
