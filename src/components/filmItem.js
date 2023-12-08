import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function FilmItem(props) {
  return (
    <div>
      <center>
        <Card style={{ height: '100%' }}>
          {/* Set the card image to the poster of the film. */}
          <Card.Img variant="top" src={props.myFilm.poster} style={{ height: '500px' }} />
          <Card.Body>
            {/* Set the card title to the title of the film. */}
            <Card.Title>{props.myFilm.title}</Card.Title>
            {/* Set the card director to the director of the film. */}
            <Card.Text>{props.myFilm.director}</Card.Text>
          </Card.Body>
          <Link to={'/update/' + props.myFilm._id} className='btn btn-primary'>Update</Link>
          <Button variant='danger' onClick={(e) => {
            axios.delete('http://localhost:4000/api/film/' + props.myFilm._id)
              .then((res) => {
                let reload = props.Reload();
                // For reloading the page once you've deleted something.
              })
              .catch();
          }}>Delete</Button>
        </Card>
      </center>
    </div>
  );
}

export default FilmItem;