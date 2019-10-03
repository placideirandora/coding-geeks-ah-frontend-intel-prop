import { combineReducers } from 'redux';
import loginReducer from '../../feature/authentication/login/LoginReducer';
import logoutReducer from '../../feature/authentication/logout/LogoutReducer';

export default combineReducers({
  login: loginReducer,
  logout: logoutReducer,
});
