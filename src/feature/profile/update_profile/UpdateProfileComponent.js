/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import './UpdateProfileStyle.scss';

export class UpdateProfileComponent extends Component {
  constructor(props) {
    super(props);
    const { authenticated } = this.props;
    this.state = {
      user: authenticated.username,
      userName: null,
      bio: null,
      image: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleFileUpload = e => {
    this.setState({
      image: e.target.files[0]
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bio, image } = this.state;
    if (!bio && !image) {
      toast.error('No data provided', {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      const { updateProfile } = this.props;
      updateProfile(this.state);
    }
  };

  hideModel = e => {
    e.preventDefault();
  }

  render() {
    const { show } = this.props;
    return show ? (
      <div>
        <div className="modal">
          <div className="modal__modal-content">
            <h2 className="modal-content__title">Update Profile</h2>
            <form className="modal-content__form" onSubmit={this.handleSubmit}>
              <label className="modal-content__label">Bio</label>
              <br />
              <textarea
                rows="5"
                cols="60"
                type="text"
                id="bio"
                onChange={this.handleChange}
                className="modal-content__textarea"
              />
              <br />
              <label className="modal-content__label">Image</label>
              <br />
              <input
                type="file"
                onChange={this.handleFileUpload}
                className="modal-content__file"
              />
              <br />
              <button type="submit" className="modal-content__btn">
              Update
              </button>
              <button type="submit" className="modal-content__btn" onClick={this.hideModel}>Close</button>
            </form>
          </div>
        </div>
      </div>
    ) : (null);
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(
  mapStateToProps
)(UpdateProfileComponent);
