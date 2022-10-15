import axios from 'axios';
import { toast } from 'react-toastify';
import setAxiosConfig from '../../app/common/config/axiosConfig';
import {
  CLEAR_FOLLOW,
  FOLLOW_AUTHOR_SUCCESS,
  UNFOLLOW_AUTHOR_SUCCESS,
  FOLLOW_AUTHOR_FAIL,
  UNFOLLOW_AUTHOR_FAIL,
  GET_FOLLOWING_AUTHOR_SUCCESS,
  GET_FOLLOWING_AUTHOR_FAIL
} from './followUnfollowTypes';
import { BACKEND_URL } from '../../app/common/config/appConfig';

export const clearFollowing = () => (dispatch) => dispatch({ type: CLEAR_FOLLOW });

export const getFollowing = () => async (dispatch) => {
  try {
     const { username } = localStorage;
    const res = await axios.get(
      `${BACKEND_URL}/profiles/${username}/following`, setAxiosConfig()
    );

    dispatch({
      type: GET_FOLLOWING_AUTHOR_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = (await error.response) ? error.response.data.error : 'Network Error';
    toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
    dispatch({ type: GET_FOLLOWING_AUTHOR_FAIL, payload: errorMessage });
  }
};

export const followAuthor = (username) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/profiles/${username}/follow`, {}, setAxiosConfig()
    );

    dispatch({
      type: FOLLOW_AUTHOR_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = (await error.response) ? error.response.data.error : 'Network Error';
    toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
    dispatch({ type: FOLLOW_AUTHOR_FAIL, payload: errorMessage });
  }
};

export const unfollowAuthor = (username) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${BACKEND_URL}/profiles/${username}/unfollow`, setAxiosConfig()
    );

    dispatch({
      type: UNFOLLOW_AUTHOR_SUCCESS,
      payload: res.data.message,
    });
  } catch (error) {
    const errorMessage = (await error.response) ? error.response.data.error : 'Network Error';
    toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
    dispatch({ type: UNFOLLOW_AUTHOR_FAIL, payload: errorMessage });
  }
};
