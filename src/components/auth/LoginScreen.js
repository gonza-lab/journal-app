import React from 'react';

export const LoginScreen = () => {
  return (
    <>
      <h3>Login</h3>
      <form>
        <div className="auth__input-group">
          <input
            autoComplete="off"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            autoComplete="off"
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
