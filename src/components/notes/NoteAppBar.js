import React from 'react';

export const NoteAppBar = () => {
  return (
    <div className="note__appbar">
      <span>2 de octubre del 2020</span>

      <div>
        <button className="btn">
          Picture
        </button>
        <button className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
