import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Update(props) {
  // The useParams hook returns an object of key/value pairs of
  // the dynamic params from the current URL that were matched by
  //the <Route path>.
  let { id } = useParams();
  // update arrays using the React useState()
  // and without the Array objects push() method
  const [title, setTitle] = useState("");
  const [poster1, setPoster1] = useState("");
  const [poster2, setPoster2] = useState("");
  const [poster3, setPoster3] = useState("");
  const [director, setDirector] = useState("");
  // useNavigate return a function that we can use to navigate
  const navigate = useNavigate();
  //useEffect Hook is similar componentDidMount
  useEffect(() => {
    //axios is a promised based web client
    //make a HTTP Request with GET method and pass as part of the
    //url.
    axios.get('http://localhost:4000/api/film/' + id)
      .then((response) => {
        // Assign Response data to the arrays using useState.
        setTitle(response.data.title);
        setPoster1(response.data.poster1);
        setPoster2(response.data.poster2);
        setPoster3(response.data.poster3);
        setDirector(response.data.director);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newFilm = {
      id: id,
      title: title,
      poster1: poster1,
      poster2: poster2,
      poster3: poster3, 
      director: director
    };
    axios.put('http://localhost:4000/api/film/' + id, newFilm)
      .then((res) => {
        console.log(res.data);
        alert("Data has been successfully edited!");
        navigate('/Browse');
      });
  }
  return (
    <div>
      {/*<h1>Test from Update</h1>*/}

      <br />
      <br />
      <br />
      <h3>Editing your Collection</h3>
      <br />
      <p>
        Here you can edit the film you've chosen.
      </p>
      <br />
      <form onSubmit={handleSubmit} style={{ width: '40%', margin: '0 auto' }}>
        <div className="form-group">
          <br />
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
          <br />
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
          <br />
          <label>Film Poster 1 (URL): </label>
          <input type="text"
            className="form-control"
            value={poster1} // Text in the input box.
            onChange={
              (e) => {
                setPoster1(e.target.value) // Update value.
              }
            }
          />
        </div>
        <div className="form-group">
          <br />
          <label>Film Poster 2 (URL): </label>
          <input type="text"
            className="form-control"
            value={poster2} // Text in the input box.
            onChange={
              (e) => {
                setPoster2(e.target.value) // Update value.
              }
            }
          />
        </div>
        <div className="form-group">
          <br />
          <label>Film Poster 3 (URL): </label>
          <input type="text"
            className="form-control"
            value={poster3} // Text in the input box.
            onChange={
              (e) => {
                setPoster3(e.target.value) // Update value.
              }
            }
          />
        </div>
        <div>
          <br />
          <input type="submit" value="Edit Film"></input>
        </div>
      </form>
    </div>
  );
}
