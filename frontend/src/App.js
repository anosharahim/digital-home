import NotesList from "./components/NotesList";
import "./index.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

const App = () => {
  // this is the main component of the app that renders the other components

  const [notes, setNote] = useState([]); // this sets the state of notes to an empty array that is dynamically updated

  const refreshList = () => {
    // this connects to the backend and gets the data from the database
    axios
      .get("/api/notes/")
      .then((res) => setNote(res.data)) //res = response from backend
      .catch((err) => console.log(err)); //if there is an error, it will be logged in the console
  };

  useEffect(() => {
    refreshList(); // this is a hook that runs the refreshList function when the page is loaded or refreshed- only once at the start
  }, []);

  const [searchText, setSearchText] = useState(""); // this sets the state of the search text to an empty string

  const addNote = (text) => {
    const newnote = {
      text: text,
      date: new Date().toLocaleDateString(),
    };
    axios.post(`/api/notes/`, newnote).then((res) => {
      // this posts the new note to the backend
      setNote([...notes, res.data]);
    });
  };

  const deleteNote = (id) => {
    setNote(notes.filter((note) => note.id !== id));
  };

  //App.js returns the main container of the app
  return (
    <div className="container">
      <h1> Notes </h1>
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
