import React from 'react';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
  const entries = [1, 2];

  return (
    <div className="journal__entries">
      {entries.map((entry) => (
        <JournalEntry key={entry} />
      ))}
    </div>
  );
};
