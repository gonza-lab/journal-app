import React from 'react';
import { JournalEntries } from './JournalEntries';

export const SideBar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <span>
          Hello, gonzalo!
          <i class="far fa-hand-paper"></i>
        </span>
        <button>
          Logout
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
      <div className="journal__new-entry">
        <i class="fas fa-feather-alt"></i>
        <p>Create new entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
