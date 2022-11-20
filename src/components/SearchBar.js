import React from 'react';
import '../stylesheets/SearchBar.css';

const SearchBar = ({onInputChange}) => {
  return(
  <div className='search-container'>
    <input onChange={ (event) => onInputChange(event.target.value) } placeholder='Type in your keywords...' className='search-bar' />
  </div>
  )
}

 
export default SearchBar;