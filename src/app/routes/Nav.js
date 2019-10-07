import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Navbar = () => (
  <nav className="nav-wrapper">
    <Link to="/">
      <img src={logo} className="App-logo" alt="authors haven logo" />
    </Link>
    <ul className="right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Signup" className="last">Sign Up</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
