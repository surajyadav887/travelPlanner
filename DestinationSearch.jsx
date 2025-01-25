import React, { useState } from 'react';

const DestinationSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Call the parent function with the query
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a destination..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default DestinationSearch;
