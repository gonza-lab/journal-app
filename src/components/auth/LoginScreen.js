import React from 'react';
import { Input } from './Input';
import img from '../../assets/google-button.png';

export const LoginScreen = () => {
  return (
    <>
      <span className="auth__title">LOGIN</span>
      <form>
        <div className="auth__input-group">
          <Input text="Email" i="lock" type="text" />
          <Input text="Password" i="at" type="password" />
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
    </>
  );
};
