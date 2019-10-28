import axios from 'axios';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../../../app/common/config/appConfig';
import getSingleArticle from '../getSingleArticle/GetSingleArticleAction';
import {
  LIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAIL,
  DISLIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_FAIL
} from '../constants';
import axiosConfig from '../../../app/common/config/axiosConfig';

export const likeArticle = slug => async dispatch => {
  try {
    const { data } = await axios.put(
      `${BACKEND_URL}/articles/${slug}/like`,
      {},
      axiosConfig
    );
    dispatch({
      type: LIKE_ARTICLE_SUCCESS,
      payload: data
    });
    dispatch(getSingleArticle(slug));
    toast.success(data.message, { position: toast.POSITION.TOP_CENTER });
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: LIKE_ARTICLE_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};

export const dislikeArticle = slug => async dispatch => {
  try {
    const { data } = await axios.put(
      `${BACKEND_URL}/articles/${slug}/dislike`,
      {},
      axiosConfig
    );
    dispatch({
      type: DISLIKE_ARTICLE_SUCCESS,
      payload: data
    });
    dispatch(getSingleArticle(slug));
    toast.warn(data.message, { position: toast.POSITION.TOP_CENTER });
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: DISLIKE_ARTICLE_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};
