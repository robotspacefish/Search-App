import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <section id="search" className="text-center container">
        <input type="text" placeholder="search term" onChange={
          (searchTerm) => props.handleSearch(searchTerm)
          } />
    </section>
  );
};

export default Search;