import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200; // hardcodes character limit
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value); // only allow user to type if character limit is not exceeded
    }
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>

      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining </small>
        <button className="save" onClick={handleSaveClick}>
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default AddNote;
