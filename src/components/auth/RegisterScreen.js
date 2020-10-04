import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Input } from './Input';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { name, email, password, confirm } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password !== confirm) {
      dispatch(setError('Passwords should be the same'));
      return false;
    } else if (password.length <= 5) {
      dispatch(setError('Password should be at least 6 characters'));
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
    <div className="auth__main">
      <div className="auth__box-container animate__animated animate__fadeInDown">
        <span className="auth__title">REGISTER</span>
        <form onSubmit={handleSubmit}>
          <div className="auth__input-group">
            <Input
              text="Name"
              i="id-card"
              type="text"
              value={name}
              handleInputChange={handleInputChange}
            />
            <Input
              text="Email"
              i="at"
              type="text"
              value={email}
              handleInputChange={handleInputChange}
            />
            <Input
              text="Password"
              i="lock"
              type="password"
              value={password}
              handleInputChange={handleInputChange}
            />
            <Input
              text="Confirm password"
              name="confirm"
              i="lock"
              type="password"
              value={confirm}
              handleInputChange={handleInputChange}
            />
          </div>
          <button type="submit">REGISTER</button>
        </form>
        {msgError && (
          <div className="auth__error animate__animated animate__fadeIn">
            {msgError}
          </div>
        )}
        <p className="auth__sign">
          <Link to="/auth/login">Already registered?</Link>
        </p>
      </div>
    </div>
  );
};
