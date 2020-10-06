import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(doc.id);

    dispatch(activeNote(doc.id, newNote));
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = ({ title, body, date, url }) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active } = getState().notes;

    await db
      .doc(`${uid}/journal/notes/${active.id}`)
      .set({ title, body, date });

    dispatch(refreshNote(active.id, { title, body, date, url, id: active.id }));
    Swal.fire('Saved', title, 'success');
  };
};

export const refreshNote = (nid, note) => ({
  type: types.notesUpdated,
  payload: {
    nid,
    note,
  },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    ...note,
    id,
  },
});

export const startUploadingImg = ( file ) => {
  return async (dispatch, getState) => {
    const {active: activeNote} = getState().notes;

    const fileUrl = await fileUpload(file);

    console.log(fileUrl);
  }
}
