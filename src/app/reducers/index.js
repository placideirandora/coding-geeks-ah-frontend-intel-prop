import { combineReducers } from 'redux';
import loginReducer from '../../feature/auth/login/LoginReducer';
import logoutReducer from '../../feature/auth/logout/LogoutReducer';

export default combineReducers({
  login: loginReducer,
  logout: logoutReducer,
});
