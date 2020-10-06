import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadingImg } from '../../actions/notes';

export const NoteAppBar = () => {
  const { notes } = useSelector((state) => state);
  const { active } = notes;
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureUpload = () => {
    console.log('handlePictureUpload');
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploadingImg(file));
    }
  };

  return (
    <div className="note__appbar">
      <span>2 de octubre del 2020</span>
      <input
        type="file"
        style={{
          display: 'none',
        }}
        name="file"
        id="fileSelector"
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleUpdate}>
          Save
        </button>
      </div>
    </div>
  );
};
