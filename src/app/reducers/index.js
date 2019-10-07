import { combineReducers } from 'redux';
import SignUpReducer from '../../feature/auth/signup/SignUpReducer';

export default combineReducers({ newUser: SignUpReducer });
