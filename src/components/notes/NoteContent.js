import React from 'react';

export const NoteContent = () => {
  return (
    <div className="note__content">
      <input
        type="text"
        placeholder="Some awesome title"
        className="note__title-input"
        autoComplete="off"
      />

      <textarea
        placeholder="What happened today"
        className="note__textarea"
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
