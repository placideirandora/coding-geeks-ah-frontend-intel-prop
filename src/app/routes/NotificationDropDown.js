/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-expressions */
import React from 'react';

const NotificationDropDown = ({ response }) => {
  // const { response } = props;
  console.log(response);
  return response ? (
    <div className="dropdown-notification">
      <ul>
        <a href={response.message.url}>
          <li>
            { response.message.message }
          </li>
        </a>
      </ul>
    </div>
  ) : (
    <p> No new notification </p>
  );
};

export default NotificationDropDown;
