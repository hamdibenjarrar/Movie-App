import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.vote_average >= rateFilter
  );

  return (
    <div>
      <h1>Movie Library</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;