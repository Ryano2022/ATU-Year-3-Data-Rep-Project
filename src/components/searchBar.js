// Help from a YouTube tutorial for this. https://youtu.be/sWVgMcz8Q44?si=EybNK_-yBSGOjiBs

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";


function SearchBar({setResults}) {
  const [search, setSearch] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:4000/api/films")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((film) => {
        return (
          value &&
          film && 
          film.title && 
          film.title.includes(value));
      });
      console.log(results);
      setResults(results);
    })
  }

  const handleChange = (value) => {
    setSearch(value);
    fetchData(value);
  }

  return (
    <div className="search">
      <FaSearch id="searchIcon" />
      <input 
        type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={(e) => handleChange(e.target.value)} 
      />
    </div>
  );
}

export default SearchBar;