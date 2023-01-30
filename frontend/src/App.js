import NotesList from "./components/NotesList";
import "./index.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

const App = () => {
  const [notes, setNote] = useState([]);

  const refreshList = () => {
    axios
      .get("/api/notes/")
      .then((res) => setNote(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const newnote = {
      text: text,
      date: new Date().toLocaleDateString(),
    };
    axios.post(`/api/notes/`, newnote).then((res) => {
      setNote([...notes, res.data]);

      // refreshList();
    });
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
