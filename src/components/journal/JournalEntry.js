import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ title, body, url, date, id }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleActive = () => {
    dispatch(activeNote(id, { title, body, url, date, id }));
  };

  return (
    <div className="journal__entry" onClick={handleActive}>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1584047633756-f22887bb6100?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
      />
      <span className="journal__info">
        <h1>{title}</h1>
        <p>{body}</p>
      </span>
      <span className="journal__date">
        <span>{noteDate.format('dddd')}</span>
        <b>{noteDate.format('Do')}</b>
      </span>
    </div>
  );
};
