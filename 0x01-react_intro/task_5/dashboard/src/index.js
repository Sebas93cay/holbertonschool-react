import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Notifications } from './Notifications/Notifications';

const rootDiv = document.getElementById('root');

console.log('el rootDiv is', rootDiv);

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <div id='root-notifications'>
      <Notifications></Notifications>
    </div>
    <App />
  </React.StrictMode>,
);
