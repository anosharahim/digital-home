import NotesList from "./components/NotesList";
import "./App.css";
import "./index.css";
import Search from "./components/Search";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNote] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/4/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "15/5/2021",
    },
    {
      id: nanoid(),
      text: "This is my fifth note",
      date: "15/6/2021",
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "15/7/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const newnote = {
      id: nanoid(),
      text: text,
      // current date
      date: new Date().toLocaleDateString(),
    };
    setNote([...notes, newnote]);
  };

  const deleteNote = (id) => {
    setNote(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
