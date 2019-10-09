import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../app/routes/Nav';
import './Home.scss';

const Home = () => (
  <div>
    <header className="App-header">
      <Nav />
    </header>
    <p className="intro">Authors Haven by Coding Geeks</p>
  </div>
);

export default withRouter(Home);
