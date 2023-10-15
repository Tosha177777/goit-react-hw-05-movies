import React from 'react';
import { useEffect, useState } from 'react';
import fetchMovies from 'components/Service/api';
import HomeMovieList from 'components/HomeMovieList/HomeMovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const dataMovies = await fetchMovies('/trending/movie/day');
        const results = dataMovies.results;
        setMovies(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMovies();
  }, []);

  return (
    <div>
      <HomeMovieList movies={movies} />
    </div>
  );
};

export default HomePage;
