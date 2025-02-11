import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details">
      <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
        <div className="content-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="detail-poster"
          />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p className="tagline">{movie.tagline}</p>
            <div className="facts">
              <span>{movie.release_date.split('-')[0]}</span>
              <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
              <span>Rating: {movie.vote_average}/10</span>
            </div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <div className="genres">
              {movie.genres.map(genre => (
                <span key={genre.id} className="genre">{genre.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;