import { config } from 'dotenv';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAIL } from '../constants';

config();

const createArticle = ({
  title,
  description,
  tags,
  category,
  body
}) => async dispatch => {
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiY2FybG9zQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidXNlcm5hbWUiOiJjYXJsb3NHIiwiaWF0IjoxNTcwNDY2NzI2LCJleHAiOjE1NzA1NTMxMjZ9.aNQGGCfhQD33rChTcS9Sx-afxymiV4Nb703jR_ydsaE';
  const token = localStorage.getItem('token');
 
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  };
  const formData = {
    title,
    description,
    tags,
    category,
    body
  };
  try {
    // https://codinggeeks-ah-backnd-staging.herokuapp.com/api/v1/articles/
    const res = await axios.post(
      'http://localhost:5000/api/v1/articles/',
      formData,
      axiosConfig
    );
    dispatch({
      type: CREATE_ARTICLE_SUCCESS,
      payload: res.data
    });
    toast.success('You have successfully created your article.', {
      position: toast.POSITION.TOP_CENTER
    });
  } catch (err) {
    const error = (await err.response)
      ? err.response.data.error
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: CREATE_ARTICLE_FAIL, payload: error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};
export default createArticle;
