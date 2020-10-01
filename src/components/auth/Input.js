import React, { useState } from 'react';

export const Input = ({ text, i, type }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <label className="auth__input-item">
      {text}:
      <div>
        <input
          className={value && 'auth__isWrited'}
          autoComplete="off"
          type={type}
          name={text.toLowerCase()}
          value={value}
          onChange={handleChange}
        />
        <i className={`fas fa-${i}`}></i>
      </div>
    </label>
  );
};
