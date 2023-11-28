import { useState } from "react";
import axios from "axios";

function Create() {
  // Adding of state variables.
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [director, setDirector] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title: " + title +
      " Cover: " + cover +
      " Director: " + director);

    const film = {
      title: title,
      cover: cover,
      director: director
    }
    // Make a post to that URL and send the film object.
    axios.post('http://localhost:4000/api/film', film)
      .then()
      .catch();

  } // Show up in the logs.

  return (
    <div>
      {/*<h1>Test from Write</h1>*/}
      
      <br/>
      <br/>
      <br/>
      <h3>Adding a Film</h3>
      <br/>
      <p>
        Here you can fill out the boxes to add to your list of films that you've watched.
      </p>
      <br/>
      <form onSubmit={handleSubmit} style={{ width: '40%', margin: '0 auto'}}>
        <div className="form-group">
          <br/>
          <label>Film Title: </label>
          <input type="text"
            className="form-control"
            value={title} // Text in the input box.
            onChange={
              (e) => {
                setTitle(e.target.value) // Update value.
              }
            }
          />
        </div>
        <div className="form-group">
          <br/>
          <label>Film Director: </label>
          <input type="text"
            className="form-control"
            value={director} // Text in the input box.
            onChange={
              (e) => {
                setDirector(e.target.value) // Update value.
              }
            }
          />
        </div>
        <div className="form-group">
          <br/>
          <label>Film Cover (URL): </label>
          <input type="text"
            className="form-control"
            value={cover} // Text in the input box.
            onChange={
              (e) => {
                setCover(e.target.value) // Update value.
              }
            }
          />
        </div>
        <div>
          <br />
          <input type="submit" value="Add Film"></input>
        </div>
      </form>
    </div>
  );
}

export default Create;