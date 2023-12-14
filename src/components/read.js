import React, { useEffect, useState } from "react";
import Films from "./films";
import SearchBar from "./searchBar";
import axios from "axios";
import SearchResultsList from "./searchResultsList";


export default function Read() {
  const [data, setData] = useState([]); // Set to an empty array.
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(
    () => {
      axios.get('http://localhost:4000/api/films') // API URL.
        .then(
          (response) => {
            setData(response.data); // Update value.
          }
        )
        .catch(
          (error) => {
            console.log(error); // Log the error.
          }
        );
    },
    []
  )

  const Reload = (e) => {
    axios.get('http://localhost:4000/api/films') // API URL
      .then(
        (response) => {
          setData(response.data); // Update value.
        }
      )
      .catch(
        (error) => {
          console.log(error); // Log the error.
        }
      )
  }

  return (
    <div>
      {/*<h1>Test from Read</h1>*/}

      <br /><br /><br />
      <h3>Viewing your Collection</h3>
      <br />
      <p>
        Here you can view your list of films that you've watched. <br />
        If nothing is showing up, then you haven't added any films yet or they are loading. <br /><br />
        !! You can also use the search bar below to check if you've added the film to your list already !! <br />
      </p>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchBar setResults={setResults} />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "500px" }}>
          <SearchResultsList results={results} />
        </div>
      </div>
      <br /><br /><br />
      <Films myFilms={data} DataReload={Reload} searchTerm={searchTerm} />
      {/* For passing functionality. */}
    </div>
  );
}

