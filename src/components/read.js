import { useEffect, useState } from "react";
import axios from "axios";
import Films from "./films";

function Read() {
  const [data, setData] = useState([]); // Set to an empty array.
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

      <br />
      <br />
      <br />
      <h3>Viewing your Collection</h3>
      <br />
      <p>
        Here you can view your list of films that you've watched.
      </p>
      <br />
      <Films myFilms={data} DataReload={Reload}></Films>
      {/* For passing functionality. */}
    </div>
  );
}
export default Read;