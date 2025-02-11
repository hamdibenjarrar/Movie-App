import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;