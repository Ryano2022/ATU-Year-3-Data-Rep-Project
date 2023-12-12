import React from 'react';
import FilmItem from './filmItem';

function Films(props) {
  const {myFilms} = props;

  return (
    <div className="container">
      <div className="row"> {/* Making it so that they can only be in rows. */}
        {myFilms.map((film) => (
          <div className="col-md-4 mb-4" key={film._id}>
            <FilmItem myFilm={film} Reload={()=>{props.DataReload()}}/> {/* Displaying entries from the collection.  */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;
