/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from './LoginAction';
import './Login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount = () => {
    this.setState((prevState) => ({ ...prevState }));
  };

  componentDidUpdate = () => {
    this.redirectOnSuccess();
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  redirectOnSuccess = () => {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? this.props.history.push('/') : null;
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className="main-section-login">
        <div className="row">
          <div className="login-row">
            <h1>Log In</h1>
            <p>
              <b>New to Authors Haven?</b>
              {' '}
              <span>
                <Link to="/signup" className="sign-up-link">Sign Up</Link>
              </span>
            </p>
          </div>
          <div className="main-login-row clearfix">
            <div className="form-control col">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="reset-control"><Link to="/resetPasswordRequest" className="reset-link">Forgot Password?</Link></div>
                  <br />
                  <br />
                  <button type="submit" className="btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="social-login-control col">
              <p className="social-btn-control btn-facebook">
                <Link to="/signup" className="social-button">Log in with Facebook</Link>
              </p>
              <p className="social-btn-control btn-google">
                <Link to="/signup" className="social-button">Log in with Google</Link>
              </p>
              <p className="social-btn-control btn-twitter">
                <Link to="/signup" className="social-button">Log in with Twitter</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { login },
)(Login);
