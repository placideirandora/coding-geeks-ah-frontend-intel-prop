/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Home from '../feature/Home';
import About from '../feature/About';
import Nav from './routes/Nav';
import Login from '../feature/authentication/login/LoginComponent';


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
          <Route path="/About" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
