import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import store from './store';
import Home from '../feature/Home';
import About from '../feature/About';
import Nav from './routes/Nav';
import SignUp from '../feature/signup/SignUpComponent';

toast.configure();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer />
        <BrowserRouter>
          <header className="App-header">
            <Nav />
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Signup" component={SignUp} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
