import React from "react";
import { MdSearch } from "react-icons/md";


const Search = () => {
    return <div className= 'search'>
    <MdSearch className="search-icons" size='1.2em'> </MdSearch>
    <input type="text" placeholder="type to search note" className="search-input" />
    </div>;
};

export default Search;