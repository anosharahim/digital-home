import React from "react";
import { MdSearch } from "react-icons/md";


const Search = ({handleSearchNote}) => {
    return <div className= 'search'>
    <MdSearch className="search-icons" size='1.2em'> </MdSearch>
    <input 
    onChange={(event)=> 
        handleSearchNote(event.target.value)
        } 
        type="text" 
        placeholder="type to search note..." 
         />
    </div>;
};

export default Search;