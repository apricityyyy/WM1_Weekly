// App.js
import React from 'react';
import Note from './Note';
import notesData from './notes';

function App() {
  const [notes, setNotes] = React.useState(notesData);

  const handleRemoveNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header>
        <h1>My Keep App</h1>
      </header>

      <main>
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </main>

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export default App;