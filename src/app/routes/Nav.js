/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { retrieveProfile } from '../../feature/profile/view_profile/ViewProfileAction';
import { login } from '../../feature/auth/login/LoginAction';
import { social, authUser } from '../../feature/auth/socialLogin/SocialAction';
import DropDown from './DropDown';
import DefaultAvatar from '../common/images/avatar.png';
import NotificationAvatar from '../common/images/notification.png';

export class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  componentDidMount = () => {
    window.document.addEventListener('click', (e) => {
      const { parentNode, classList } = e.target;
      return (
        (classList || (parentNode && parentNode.classList))
        && !classList.contains('user-image')
        && this.setState({ show: false })
      );
    });
    this.currentUserProfile();
  };

  displayMenu = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  currentUserProfile = () => {
    const { currentUser, retrieveProfile } = this.props;
    const { user: { username }, isAuthenticated } = currentUser;
    return isAuthenticated ? retrieveProfile(username) : null;
  }

  redirectURL = () => {
    window.location.replace('/');
  }

  render() {
    const { search } = window.location;
    if (search) {
      if (search.includes('token')) {
        const token = search.replace('?token=', '');
        this.props.authUser(token);
        this.redirectURL();
      }
    }

    const {
      currentUser: { isAuthenticated },
      success,
      profile: { profile }
    } = this.props;
    const { show } = this.state;
    return (
      <nav className="nav-wrapper">
        <div className="logo-container">
          <Link to="/" className="logo">
            Authors Haven
          </Link>
        </div>
        {!(isAuthenticated || success)
          ? (
            <div className="right">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/Signup">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="right">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="notification">
                  <span className="notification-counter">10</span>
                  <img src={NotificationAvatar} className="right__img" alt="notification" />
                </li>
                <div className="dropdown">
                  <li className="img-list-item">
                    <img src={profile.image || DefaultAvatar} className="right__img user-image" alt="user" onClick={this.displayMenu} />
                  </li>
                  {show
                    ? (
                      <div className="dropdown-content">
                        <DropDown user={profile} />
                      </div>
                    ) : ''}
                </div>
              </ul>
            </div>
          )}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.login,
  success: state.social.success,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  {
    login,
    social,
    authUser,
    retrieveProfile
  }
)(Navbar);
