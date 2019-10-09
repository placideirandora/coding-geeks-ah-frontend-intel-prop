import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL } from '../constants';

const getAllArticles = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/v1/articles/');
    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: GET_ARTICLES_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};

export default getAllArticles;
