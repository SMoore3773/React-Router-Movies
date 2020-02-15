import React from 'react';
import {NavLink} from 'react-router-dom';

function MovieCard(props) {
  console.log(props)
  const { title, director, metascore, stars } = props.movie;
  const renderSaveButton = ()=> {
    if(props.renSav){ return (
      <div className="save-button">Save</div>
    )}
  }
  return (
    <NavLink to={`/movies/${props.movie.id}`}>
      <div  className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        {renderSaveButton()}
      </div>
    </NavLink>
    
  );
}

export default MovieCard;
