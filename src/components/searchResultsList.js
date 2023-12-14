import React from "react";
import "./searchResultsList.css";

function SearchResultsList({results}) {
  return (
    <div className="results-list">
      {results.map((film) => {
        return (
          <div className="results-list-item">
            <p>{film.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SearchResultsList;