import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar';
import { NoteContent } from './NoteContent';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm(note);

  const activeNoteIdRef = useRef(note.id);

  useEffect(() => {
    if (activeNoteIdRef.current !== note.id) {
      reset(note);
      activeNoteIdRef.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(values.id, { ...values }));
  }, [values, dispatch]);

  return (
    <div className="note__main-content">
      <NoteAppBar />
      <NoteContent values={values} handleInputChange={handleInputChange} />
    </div>
  );
};
