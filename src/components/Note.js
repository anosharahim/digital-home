import {MdDeleteForever} from 'react-icons/md';

const Note () => {
    return(
        <div className='note'>
        <span> Hello, this is our first note! </span> 
        <div className="note-footer"> 
            <small> date</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>

        </div>
    );
};

export default Note;
// you can make css files as long as some component calls on them 
// you can only write css in css files, or style tags in  js files 
// style=something directly influences style
// course in javascript 
// by the time i wake up, i want to be able to enter some data somewhere in the 
// application where there is a data array, which should display the notes. 
// If there are any concepts you don't understand what it is doing, you should look it up. 
// Once I see the app, I will quiz you