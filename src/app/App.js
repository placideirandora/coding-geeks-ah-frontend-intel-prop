import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import About from './About';

import './App.css';
import Nav from './Nav';

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
