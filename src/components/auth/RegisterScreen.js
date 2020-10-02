import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from './Input';

export const RegisterScreen = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container animate__animated animate__fadeInDown">
        <span className="auth__title">REGISTER</span>
        <form>
          <div className="auth__input-group">
            <Input text="Name" i="id-card" type="text" />
            <Input text="Email" i="at" type="text" />
            <Input text="Password" i="lock" type="password" />
            <Input text="Confirm password" i="lock" type="text" />
          </div>
          <button type="submit">REGISTER</button>
        </form>
        <p className="auth__sign">
          <Link to="/auth/login">Already registered?</Link>
        </p>
      </div>
    </div>
  );
};
