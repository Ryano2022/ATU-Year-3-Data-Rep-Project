import React from 'react';
import FilmItem from './filmItem';

function Films(props) {
  const { myFilms, searchTerm} = props;
  // Filter the films based on the search term
  const filteredFilms = myFilms.filter(film => film.title.includes(searchTerm));

  return (
    <div className="container">
      <div className="row"> {/* Making it so that they can only be in rows. */}
        {filteredFilms.map((film) => (
          <div className="col-md-4 mb-4" key={film._id}>
            <FilmItem myFilm={film} Reload={() => { props.DataReload() }} /> {/* Displaying entries from the collection.  */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;