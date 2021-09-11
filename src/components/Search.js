import React from 'react';

const Search = (props) => {
    return(
        <input value={props.searchInput} onChange={props.handleChange} style={{border: '1px solid green'}} />
    )
}

export default Search