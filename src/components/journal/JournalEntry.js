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
      <img alt="" src={url} />
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
