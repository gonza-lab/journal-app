import React from 'react';
import { Input } from './Input';
import img from '../../assets/google-button.png';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <div className="auth__box-container animate__animated animate__fadeInDown">
      <span className="auth__title">LOGIN</span>
      <form>
        <div className="auth__input-group">
          <Input text="Email" i="at" type="text" />
          <Input text="Password" i="lock" type="password" />
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <div className="auth__other">
        <span>Or login with</span>
        <button>
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
