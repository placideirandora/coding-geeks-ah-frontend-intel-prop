import { config } from 'dotenv';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAIL } from './constants';

config();

const createArticle = ({
  title,
  description,
  tags,
  category,
  body
}) => async dispatch => {
  localStorage.setItem(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiY2FybG9zQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidXNlcm5hbWUiOiJjYXJsb3NHIiwiaWF0IjoxNTcwMzg2ODgwLCJleHAiOjE1NzA0NzMyODB9.bhgbrgMXt4AhENDHf5qb-0J3vgZ9j38GS4E-akELKIg'
  );
  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
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
    const res = await axios.post(
      'http://localhost:5000/api/v1/articles',
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
    console.log(err.response.data.error);

    const error = err.response
      ? err.response.data
      : 'SERVER ERROR!  Please contact the administartor';
    dispatch({ type: CREATE_ARTICLE_FAIL, payload: error.error });
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  }
};

export default createArticle;
