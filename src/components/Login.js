import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React, { useState } from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (login, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(login, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

const Login = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChangeLogin = e => {
    setLogin(e.target.value);
    setLoginError(false);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!login) {
      setLoginError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (login && password) {
      props.onSubmit(login, password);
    }
  };

  const email = props.email;
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center banner">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <ListErrors errors={props.errors} />
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className={`form-control form-control-lg ${loginError ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={handleChangeLogin}
                  />
                  {loginError && <div className="invalid-feedback">Заполните это поле</div>}
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
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
