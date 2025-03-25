import React from 'react';
import './MovieCard.css'; 
/* Estructura generada en este componente */

const MovieCard = ({ title, image, year, duration }) => {
  return (
    <div className="card-movie">
      <img className="thumbnail-movie" src={image} alt={title} />
      <div className="card-content">
        <div className="movie-title">{title}</div>
        <div className="movie-year">{year}</div>
      </div>
      <div className="card-footer">
        <div className="movie-duration">{duration}</div>
      </div>
    </div>
  );
};
/* Código del componente */
export default MovieCard;
