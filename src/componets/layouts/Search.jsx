import React from "react";

const Search = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value); // Updates the search term dynamically
  };

  return (
    
    <input
      type="text"
      placeholder="Search..."
      className="border rounded-lg px-3 py-1 text-black w-64"
      onChange={handleSearch} // Calls onSearch on every keystroke
    />


    
  );
};

export default Search;
