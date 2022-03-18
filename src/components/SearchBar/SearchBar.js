/* eslint-disable jsx-a11y/anchor-is-valid */
import './SearchBar.css';
import React, { useState } from 'react';

function SearchBar({ onSearch }) {

  const [searchObj, setSearchObj] = useState('');

  const search = () => {
    onSearch(searchObj);
    setSearchObj('');
  };

  const handleTermChange = (event) => {
    setSearchObj(event.target.value);
  };

  return (
    <div className='SearchBar'>
      <input placeholder="Enter A Song, Album, or Artist" value={searchObj} onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
