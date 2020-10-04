import React from 'react';
import { JournalEntries } from './JournalEntries';

export const SideBar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <span>
          Hello, gonzalo!
          <i className="far fa-hand-paper"></i>
        </span>
        <button>
          Logout
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="fas fa-feather-alt"></i>
        <p>Create new entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
