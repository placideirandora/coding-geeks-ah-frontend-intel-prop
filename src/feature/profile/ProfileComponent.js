/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveProfile } from './ProfileAction';
import './ProfileStyle.scss';

class ProfileComponent extends Component {
  render() {
    const {
      retrieveProfile, authenticated, username, image, bio
    } = this.props;
    retrieveProfile(authenticated.username);
    // console.log(this.props.profile.userName);
    console.log(username);
    console.log(image);
    console.log(bio);
    return (
      <div>
        <h1 className="heading">Profile For </h1>
        <div className="grid-container">
          <div className="grid-container__field">
            <p className="grid-container__key">Firstname</p>
            <p className="grid-container__value">Someone</p>
          </div>
          <div className="grid-container__field">
            <p className="grid-container__key">Lastname</p>
            <p className="grid-container__value">Someone</p>
          </div>
          <div className="grid-container__field">
            <p className="grid-container__key">Username</p>
            <p className="grid-container__value">{username}</p>
          </div>
          <div className="grid-container__field">
            <p className="grid-container__key">Email</p>
            <p className="grid-container__value">Somone</p>
          </div>
          <div className="grid-container__field">
            <p className="grid-container__key">Bio</p>
            <p className="grid-container__value">{bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     retrieveProfileReducer: user => dispatch(retrieveProfile(user))
//   };
// };

const mapStateToProps = state => {
  return {
    authenticated: state.login.user,
    username: state.profile.profile.userName,
    image: state.profile.profile.image,
    bio: state.profile.profile.bio
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveProfile: user => {
      dispatch(retrieveProfile(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
