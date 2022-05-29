import React from 'react';
import './Notifications.css';
import { getLatestNotifications } from '../utils/utils';

export const Notifications = () => {
  const closeNotifications = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div className='Notifications' style={{ position: 'relative' }}>
      <button
        aria-label='Close'
        style={{
          border: '2px solid black',
          position: 'absolute',
          right: '10px',
          top: '10px',
        }}
        onClick={closeNotifications}
      >
        X
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li
          data='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotifications() }}
        ></li>
      </ul>
    </div>
  );
};
