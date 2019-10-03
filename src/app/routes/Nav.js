/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../logo.png';
import Logout from '../../feature/authentication/logout/Logout';
import { login } from '../../feature/authentication/login/LoginAction';

export class Navbar extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isAuthenticated: false,
  //   };
  // }

  // componentDidMount = () => {
  //   const { isAuthenticated } = this.props;
  //   this.setState({ isAuthenticated });
  // };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="nav-wrapper">
        <Link to="/">
          <img src={logo} className="App-logo" alt="authors haven logo" />
        </Link>
        {!isAuthenticated
          ? (
            <ul className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About" className="last">About</Link>
              </li>
            </ul>
          ) : (
            <ul className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About" className="last">About</Link>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Navbar);
