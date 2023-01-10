import Note from './Note';
import AddNote from './AddNote';

const NotesList = () => {
    return (
        <div className='notes-list'>
            <Note />
            <Note />
            <Note />
            <Note />
            <AddNote/>
        </div>
    );
};

export default NotesList;