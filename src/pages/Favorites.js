import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard'; 

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No favorites yet. Add some!</p>
      )}
    </div>
  );
};

export default Favorites;