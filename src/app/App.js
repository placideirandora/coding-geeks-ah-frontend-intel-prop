/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Home from '../feature/Home';
import Nav from './routes/Nav';
import SignUp from '../feature/auth/signup/SignUpComponent';
import Login from '../feature/auth/login/LoginComponent';
import Profile from '../feature/profile/view_profile/ViewProfileComponent';
import UpdateProfile from '../feature/profile/update_profile/UpdateProfileComponent';

toast.configure();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav />
        </header>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/update-profile" component={UpdateProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
