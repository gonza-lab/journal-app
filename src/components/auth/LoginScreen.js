import React, { useEffect } from 'react';
import { Input } from './Input';
import img from '../../assets/google-button.png';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  /* login, */ startGoogleLogin,
  startLoginEmailPassword,
} from '../../actions/auth';
import { removeError, setError, startLoading } from '../../actions/ui';
import validator from 'validator';

export const LoginScreen = () => {
  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.loading);

  const [formValues, handleInputChange] = useForm({
    email: 'nando@gmail.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoading());
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  useEffect(() => {
    return () => {
      dispatch(removeError());
    };
  }, [dispatch]);

  return (
    <div className="auth__box-container animate__animated animate__fadeInDown">
      <span className="auth__title">LOGIN</span>
      <form onSubmit={handleSubmit}>
        <div className="auth__input-group">
          <Input
            text="Email"
            i="at"
            type="text"
            handleInputChange={handleInputChange}
            value={email}
          />
          <Input
            text="Password"
            i="lock"
            type="password"
            handleInputChange={handleInputChange}
            value={password}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          LOGIN
        </button>
      </form>
      {msgError && (
        <div className="auth__error animate__animated animate__fadeIn">
          {msgError}
        </div>
      )}
      <div className="auth__other">
        <span>Or login with</span>
        <button onClick={handleGoogleLogin}>
          <img alt="" src={img} />
          Google
        </button>
      </div>
      <p className="auth__sign">
        Not a member? <Link to="/auth/register">Sign up now :D</Link>
      </p>
    </div>
  );
};
