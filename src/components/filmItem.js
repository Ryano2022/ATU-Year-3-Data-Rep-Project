import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const placeholderImagePath = require('../images/placeholder.jpg'); // Import the default placeholder image.
const placeholderImagePath1 = require('../images/placeholder1.jpg'); // Import the first placeholder image.
const placeholderImagePath2 = require('../images/placeholder2.jpg'); // Import the second placeholder image.
const placeholderImagePath3 = require('../images/placeholder3.jpg'); // Import the third placeholder image.

function FilmItem(props) {
  const [posterNum, setPosterNum] = useState(1);

  useEffect(
    () => {
      const interval = setInterval(nextPoster, 3000);
      return () => clearInterval(interval);
    }, 
    [posterNum]
  );

  const nextPoster = () => {
    if (posterNum + 1 >= 4) {
      setPosterNum(1);
    } 
    else {
      setPosterNum(posterNum + 1);
    }
  };

  var posterSrc;

  if (posterNum === 1) {
    posterSrc = props.myFilm.poster1 || placeholderImagePath1; // Assign a placeholder if poster1 is not available.
  } 
  else if (posterNum === 2) {
    posterSrc = props.myFilm.poster2 || placeholderImagePath2; // Assign a placeholder if poster2 is not available.
  } 
  else if (posterNum === 3) {
    posterSrc = props.myFilm.poster3 || placeholderImagePath3; // Assign a placeholder if poster3 is not available.
  }
  else {
    posterSrc = placeholderImagePath; // Assign a placeholder if poster is not available.
  }

  return (
    <div>
      <center>
        <Card style={{ height: '100%' }}>
          {/* Set the card image to the poster of the film. */}
          <Card.Img variant="top" src={posterSrc} style={{ height: '500px' }} />
          <Card.Body>
            {/* Set the card title to the title of the film. */}
            <Card.Title>{props.myFilm.title}</Card.Title>
            {/* Set the card director to the director of the film. */}
            <Card.Text>{props.myFilm.director}</Card.Text>
          </Card.Body>
          <Link to={'/update/' + props.myFilm._id} className='btn btn-primary'>Update</Link>
          <Button variant='danger' onClick={() => {
            if (window.confirm("Are you sure you want to delete this film?")) {
              axios.delete('http://localhost:4000/api/film/' + props.myFilm._id)
                .then(() => {
                  props.Reload();
                })
                .catch();
            }
          }}>Delete</Button>
        </Card>
      </center>
    </div>
  );
}

export default FilmItem;