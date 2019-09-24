import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
import store from './store';
import Home from '../feature/Home';
import About from '../feature/About';
import Nav from './routes/Nav';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <Nav />
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
