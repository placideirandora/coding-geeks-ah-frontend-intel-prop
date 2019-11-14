/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const NotificationDropDown = ({ notifications, readNotification }) => {
  const handleClick = (id) => {
    readNotification(id);
  };

  return (notifications.length ? (
    <div className="dropdown-notification">
      <ul>
        {
            notifications.map(notification => (
              <Link to={notification.url} key={notification.id} onClick={() => { handleClick(notification.id); }}>
                <li>
                  { notification.message }
                </li>
              </Link>
            ))
          }
      </ul>
    </div>
  ) : (
    <div className="dropdown-notification">
      <p>No unread notifications</p>
    </div>
  ));
};

export default NotificationDropDown;
