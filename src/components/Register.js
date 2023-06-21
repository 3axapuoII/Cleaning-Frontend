import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React, { useState } from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, password, email, username);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

const Register = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChangeUsername = e => {
    setUsername(e.target.value);
    setUsernameError(false);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!username) {
      setUsernameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (username && email && password) {
      props.onSubmit(username, email, password);
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center banner">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>
            <ListErrors errors={props.errors} />
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className={`form-control form-control-lg ${usernameError ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleChangeUsername}
                  />
                  {usernameError && <div className="invalid-feedback">Заполните это поле</div>}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  {emailError && <div className="invalid-feedback">Заполните это поле</div>}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className={`form-control form-control-lg ${passwordError ? 'is-invalid' : ''}`}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangePassword}
                  />
                  {passwordError && <div className="invalid-feedback">Заполните это поле</div>}
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={props.inProgress}
                >
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
