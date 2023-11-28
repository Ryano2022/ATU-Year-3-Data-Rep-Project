import React from 'react';
import FilmItem from './filmItem';

function Films(props) {
  const {myFilms} = props;

  return (
    <div className="container">
      <div className="row"> {/* Making it so that they can only be in rows. */}
        {myFilms.map((film) => (
          <div key={film._id} className="col-md-4 mb-4">
            <FilmItem myFilm={film} /> {/* Displaying entries from the collection.  */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;
