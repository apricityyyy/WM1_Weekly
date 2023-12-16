// Note.js
import React from 'react';

const Note = ({ title, content, createdDate, image }) => {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{toDateString(createdDate)}</p>
      {image && <img src={image} alt="Note" />}
    </div>
  );
};

export default Note;