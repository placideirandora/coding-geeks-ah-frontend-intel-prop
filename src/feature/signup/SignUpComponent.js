/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerUser from './SignUpAction';
import './SignUpStyle.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
      confirmPassword: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createUser } = this.props;
    createUser(this.state);
  };

  render() {
    return (
      <div>
        <div className="heading">
          <h1>Sign Up</h1>
          <p>
            Already have an account? &nbsp;
            <a href="/login">Log In</a>
          </p>
        </div>
        <div className="flex-container">
          <div className="left-section">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Firstname"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Lastname"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  id="userName"
                  placeholder="Username"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="right-section">
            <button type="submit" className="google">
              LOGIN WITH GOOGLE
            </button>
            <br />
            <button type="submit" className="twitter">
              LOGIN WITH TWITTER
            </button>
            <br />
            <button type="submit" className="facebook">
              LOGIN WITH FACEBOOK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(registerUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
