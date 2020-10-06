import React from 'react';

export const NoteContent = ({ values, handleInputChange }) => {
  return (
    <div className="note__content">
      <input
        type="text"
        placeholder="Some awesome title"
        className="note__title-input"
        autoComplete="off"
        name="title"
        onChange={handleInputChange}
        value={values.title}
      />

      <textarea
        placeholder="What happened today"
        className="note__textarea"
        name="body"
        onChange={handleInputChange}
        value={values.body}
      ></textarea>

      <div className="note__image">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          alt="imagen"
        />
      </div>
    </div>
  );
};
