import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  // Adding of state variables.
  const [title, setTitle] = useState('');
  const [poster1, setPoster1] = useState('');
  const [poster2, setPoster2] = useState('');
  const [poster3, setPoster3] = useState('');
  const [director, setDirector] = useState('');
  // useNavigate return a function that we can use to navigate
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title: " + title +
      " Poster 1: " + poster1 +
      " Poster 2: " + poster2 +
      " Poster 3: " + poster3 +
      " Director: " + director);

    const film = {
      title: title,
      poster1: poster1,
      poster2: poster2,
      poster3: poster3,
      director: director
    }
    // Make a post to that URL and send the film object.
    axios.post('http://localhost:4000/api/film', film)
      .then(() => {
        alert("Data has been successfully added!");
        navigate('/Browse');
      })
      .catch(error => {
        console.log(error);
      });

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
                setTitle(e.target.value); // Update value.
              }
            }
            required={true}
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
            required={true}
          />
        </div>
        <div className="form-group">
          <br/>
          <label>Film Poster 1 (URL): </label>
          <input type="url"
            className="form-control"
            value={poster1} // Text in the input box.
            onChange={
              (e) => {
                setPoster1(e.target.value) // Update value.
              }
            }
            required={false}
          />
        </div>
        <div className="form-group">
          <br/>
          <label>Film Poster 2 (URL): </label>
          <input type="url"
            className="form-control"
            value={poster2} // Text in the input box.
            onChange={
              (e) => {
                setPoster2(e.target.value) // Update value.
              }
            }
            required={false}
          />
        </div>
        <div className="form-group">
          <br/>
          <label>Film Poster 3 (URL): </label>
          <input type="url"
            className="form-control"
            value={poster3} // Text in the input box.
            onChange={
              (e) => {
                setPoster3(e.target.value) // Update value.
              }
            }
            required={false}
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