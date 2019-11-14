import {
  RETRIEVE_NOTIFICATIONS_SUCCESS, RETRIEVE_NOTIFICATIONS_ERROR
} from './NotificationConstants';

const initState = { notifications: [] };

const NotificationReducer = (state = initState, action) => {
  switch (action.type) {
    case RETRIEVE_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.payload
      };
    case RETRIEVE_NOTIFICATIONS_ERROR:
      return state;
    default:
      return state;
  }
};

export default NotificationReducer;
