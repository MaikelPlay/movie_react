import React from 'react';
import MovieCard from './MovieCard';
/* Estructura generada en este componente para cada un componente "MovieCard" */
const MoviesList = ({ movies }) => {
  // Filtrar las películas activas
  const activeMovies = movies.filter(movie => movie.active === "true");
/* Estructura que se renderizará finalmente */
  return (
    <div className="row">
      {activeMovies.map((movie, index) => (
        <div className="col3" key={index}>
          <MovieCard 
            title={movie.title}
            image={movie.image}
            year={movie.year}
            duration={movie.duration}
          />
        </div>
      ))}
    </div>
  );
};
/* Código del componente */
export default MoviesList;
