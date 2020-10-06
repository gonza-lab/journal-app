import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { logoutCleaning, startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const SideBar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(logoutCleaning());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <span>
          {name} <i className="far fa-hand-paper"></i>
        </span>
        <button onClick={handleLogout}>
          Logout
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="fas fa-feather-alt"></i>
        <p>Create new entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
