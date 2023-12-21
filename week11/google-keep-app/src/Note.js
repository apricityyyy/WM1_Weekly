// Note.js
import React from 'react';

const Note = ({ title, content, createdDate, image }) => {
  const formattedDate = createdDate.toLocaleDateString();
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{formattedDate}</p>
      {image && <img src={image} alt="Note" />}
    </div>
  );
};

export default Note;