import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <img src="https://images.unsplash.com/photo-1584047633756-f22887bb6100?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
      <span className="journal__info">
        <h1>Aprendiendo react</h1>
        <p>Hoy estuve aprendiendo react, la verdad que es un framework que me gusta mucho. Tambien estuve utilizando los hookss</p>
      </span>
      <span className="journal__date">
        <span>Monday</span>
        <b>28</b>
      </span>
    </div>
  );
};
