import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from '../logo.png';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Authors Haven by coding geeks.</p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
