import React from 'react';
import { useEffect, useState } from 'react';
import fetchMovies from 'components/Service/api';
import HomeMovieList from 'components/HomeMovieList/HomeMovieList';
import { ColorRing } from 'react-loader-spinner';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchAllMovies = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await fetchMovies('/trending/movie/day');
        const results = dataMovies.results;
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <ColorRing visible={isLoading} />
      ) : (
        <HomeMovieList movies={movies} />
      )}
    </div>
  );
};

export default HomePage;
