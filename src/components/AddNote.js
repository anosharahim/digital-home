const AddNote = () => {
    return (
        <div className='note new'>
            <textarea
            rows ='8' 
            cols='10'
            placeholder="type to add a note"
            ></textarea>
            <div className="note-footer">
                <small>150 remaining</small>
                <button className="save"> Save </button>
            </div>
        </div>
    );
};

export default AddNote;