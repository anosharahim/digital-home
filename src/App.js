import NotesList from "./components/NotesList";
import "./App.css";
import './index.css';
import { useState } from "react";
import { nanoid } from 'nanoid';


const App = () => {
    const [notes, setNote] = useState([
        {
        id: nanoid(),
        text: "This is my first note",
        date: "15/4/2021"
        }, 
        {
        id: nanoid(),
        text: "This is my second note",
        date: "15/5/2021"
        },
        {
        id: nanoid(),
        text: "This is my fifth note",
        date: "15/6/2021"
        },
        {
        id: nanoid(),
        text: "This is my fourth note",
        date: "15/7/2021"
        }
    ])
    return (
    <div className="container">
        <NotesList notes={notes}/>
    </div>
    );
};

export default App;