import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotifications } from '../utils/utils';
import { NotificationItem } from '../NotificationItem/NotificationItem';

// export const Notifications = ({ displayDrawer = false }) => {
export const Notifications = ({ displayDrawer = false }) => {
  const closeNotifications = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div className='notificationsContainer'>
      <div className='menuItem'>Your Notifications</div>
      {displayDrawer && (
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
            <NotificationItem
              type='default'
              value='New course available'
            ></NotificationItem>
            <NotificationItem
              type='urgent'
              value='New resume available'
            ></NotificationItem>
            <NotificationItem
              type='urgent'
              html={getLatestNotifications()}
            ></NotificationItem>
          </ul>
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
