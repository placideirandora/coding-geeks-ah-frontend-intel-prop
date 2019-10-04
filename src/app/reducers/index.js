import { combineReducers } from 'redux';
import SignUpReducer from '../../feature/signup/SignUpReducer';

export default combineReducers({ newUser: SignUpReducer });
