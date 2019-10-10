/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  RETRIEVE_PROFILE_SUCCESS,
  RETRIEVE_PROFILE_ERROR
} from './ProfileConstants';
import { BACKEND_URL } from '../../app/common/config/appConfig';

export const retrieveProfile = user => async dispatch => {
  try {
    const response = await axios.get(`${BACKEND_URL}/profiles/${user}`);
    dispatch({
      type: RETRIEVE_PROFILE_SUCCESS,
      response
    });
  } catch (error) {
    dispatch({
      type: RETRIEVE_PROFILE_ERROR,
      error
    });
  }
};
