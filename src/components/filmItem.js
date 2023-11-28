import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function FilmItem(props) {
  return (
    <div>
      <center>
        <Card style={{height: '100%'}}>
          {/* Set the card image to the cover of the film. */}
          <Card.Img variant="top" src={props.myFilm.cover} style={{height: '500px'}} />
          <Card.Body>
            {/* Set the card title to the title of the film. */}
            <Card.Title>{props.myFilm.title}</Card.Title>
            {/* Set the card director to the director of the film. */}
            <Card.Text>{props.myFilm.director}</Card.Text>
          </Card.Body>
          <Link to={'/update/' + props.myFilm._id} className='btn btn-primary'>Update</Link>
        </Card>
      </center>
    </div>
  );
} 

export default FilmItem;