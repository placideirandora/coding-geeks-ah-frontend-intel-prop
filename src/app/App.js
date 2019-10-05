/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import store from './store/index';
import Home from '../feature/Home';
import Nav from './routes/Nav';
import SignUp from '../feature/auth/signup/SignUpComponent';
import Login from '../feature/auth/login/LoginComponent';
import ForgotPassword from '../feature/Reset Password/forgot password/ForgotPasswordComponent';
import ResetPassword from '../feature/Reset Password/reset password/ResetPasswordComponent';

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <Nav />
          </header>
          <ToastContainer />
          <Switch>
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
