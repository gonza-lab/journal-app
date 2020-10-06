import React from 'react';
import { useDispatch } from 'react-redux';
import { startDeleteNote } from '../../actions/notes';

export const NoteDelete = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(startDeleteNote());
  };

  return (
    <button className="note__btn-delete" onClick={handleDelete}>
      Delete note
    </button>
  );
};
