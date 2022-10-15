/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveProfile } from './ViewProfileAction';
import { updateUserProfile } from '../update_profile/UpdateProfileAction';
import './ViewProfileStyle.scss';
import notFound from '../img/no-image.jpeg';
import { UpdateProfileComponent } from '../update_profile/UpdateProfileComponent';

export class ViewProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  displayModal = (value) => {
    this.setState({
      show: value
    });
  }

  render() {
    const {
      authenticated, getProfile, profile, updateProfile,
    } = this.props;
    const { show } = this.state;
    const image = profile.profile.image ? profile.profile.image : notFound;
    const bio = profile.profile.bio ? profile.profile.bio : 'No Bio';
    if (!profile.profile.userName) {
      getProfile(authenticated.username);
    }
    return profile.profile.userName ? (
      <div>
        <h1 className="title">User Profile</h1>
        <div className="grid-container">
          <div className="grid-container__cover">
            <img
              src={image}
              alt="avatar"
              className="grid-container__avatar"
            />
          </div>
          <div className="grid-container__profile-info">
            <p className="grid-container__username">{`${profile.profile.userName}`}</p>
            <p className="grid-container__bio">{`${bio}`}</p>
          </div>
          <button type="submit" className="grid-container__btn" onClick={() => { this.displayModal(true); }}>
            Edit Profile
          </button>
          <UpdateProfileComponent
            show={show}
            authenticated={authenticated}
            updateProfile={updateProfile}
            displayModal={this.displayModal}
            bio={bio}
          />
        </div>
      </div>
    ) : (
      <p className="grid-container__loading">Loading...</p>
    );
  }
}

export const mapStateToProps = state => ({
  authenticated: state.login.user,
  profile: state.profile,
});

export const mapDispatchToProps = dispatch => ({
  getProfile: user => {
    dispatch(retrieveProfile(user));
  },
  updateProfile: (user, profile, closeModal) => dispatch(updateUserProfile(user, profile, closeModal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfileComponent);
