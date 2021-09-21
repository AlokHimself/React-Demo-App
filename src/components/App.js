import { useState } from "react";
import "../styles.css";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
export default function App() {
  // the note will reside here in an Array [] called notes

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    //  console.log(newNote);

    setNotes((previousNotes) => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

//  ADD NOTE
// 1. Create constant that would kepp track of title and content (state management)
// pass and store new note to app component probably using array
// this array would be something with state
// Take the array and render all the individual notes as separate component

// DELETE NOTE

// it would need some kind of callback to trigger delete function
// this function would be living in App.jsx

//Probably need a filter function to delet form array
// think about how to pass id over a note component to trigger a delete
