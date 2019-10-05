import axios from 'axios';
import { toast } from 'react-toastify';
import { FRONTEND_URL } from '../../../app/common/config/appConfig';
import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from './resetPasswordActionTypes';

export const resetPasswordAction = (password, confirmPassword, token, props) => async (dispatch) => {
  const payload = {
    password,
    confirmPassword,
  };
  try {
    const res = await axios.post(
      `${FRONTEND_URL}/users/reset-password/${token}`,
      payload,
    );
    const { message } = res.data;
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
    setTimeout(()=>{
      props.history.push('/Login');
    }, 1000);

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: res.data,
    });
    
  } catch (error) {
    const erroMessage = (await error.response)? error.response.data.error: 'Network Error';
    toast.error(erroMessage, { position: toast.POSITION.TOP_CENTER });
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response });
  }
};
