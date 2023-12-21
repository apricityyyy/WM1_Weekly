// App.js
import React from 'react';
import Note from './Note';
import notes from './notes';
import './App.css'
import Header from './Header'; 
import Footer from './Footer'; 

function App() {
  const [notesData, setNotes] = React.useState(notes);

  const handleRemoveNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        {notesData.map((note, index) => (
          <Note key={index} {...note} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;