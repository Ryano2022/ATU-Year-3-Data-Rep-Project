import React from 'react';
import FilmItem from './filmItem';

function Films(props) {
  const {myFilms} = props;

  return (
    <div className="container">
      <div className="row">
        {myFilms.map((film) => (
          <div key={film._id} className="col-md-4 mb-4">
            <FilmItem myFilm={film} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;
