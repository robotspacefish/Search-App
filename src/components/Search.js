import React from 'react';

const Search = (props) => {
  return (
    <section id="search">
        <input type="text" placeholder="search term" onChange={
          (searchTerm) => props.handleSearch(searchTerm)
          } />
    </section>
  );
};

export default Search;