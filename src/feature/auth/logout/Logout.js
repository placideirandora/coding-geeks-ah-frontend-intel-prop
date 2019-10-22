/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './LogoutAction';

export class Logout extends Component {
  logOut = () => {
    this.props.logout();
  };

  render() {
    return (
      <div>
        <Link className="logout" to="/logout" onClick={this.logOut}><li>Logout</li></Link>
      </div>
    );
  }
}

export default connect(
  null,
  { logout },
)(Logout);
