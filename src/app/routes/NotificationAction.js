/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-useless-path-segments
import { BACKEND_URL } from '../../app/common/config/appConfig';
import { RETRIEVE_NOTIFICATIONS_SUCCESS, RETRIEVE_NOTIFICATIONS_ERROR } from './NotificationConstants';
import setAxiosConfig from '../common/config/axiosConfig';

export const getNotifications = notifications => ({
  type: RETRIEVE_NOTIFICATIONS_SUCCESS,
  payload: notifications
});

export const sendError = notificationError => ({
  type: RETRIEVE_NOTIFICATIONS_ERROR,
  error: notificationError
});

// const token = localStorage.getItem('token');

// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: token
//   }
// };

export const retrieveNotifications = () => async dispatch => {
  try {
    const response = await axios.get(`${BACKEND_URL}/profiles/notifications/all`, setAxiosConfig());
    dispatch(getNotifications(response.data.data));
    // toast.success(response.data.message, {
    //   position: toast.POSITION.TOP_RIGHT
    // });
  } catch (error) {
    dispatch(sendError(error));
    // toast.error(error.response.data.error, {
    //   position: toast.POSITION.TOP_RIGHT
    // });
    console.log(error);
  }
};

export const readNotification = (notId) => async dispatch => {
  console.log(setAxiosConfig());
  try {
    const response = await axios.post(`${BACKEND_URL}/profiles/notifications/50/read`, setAxiosConfig());
    if (response) console.log('Notification read successfully', response);
  } catch (error) {
    console.log('Notification read error', error.response);
  }
};
