import React from 'react';
import { useEffect, useState } from 'react';
import fetchMovies from 'components/Service/api';
import HomeMovieList from 'components/HomeMovieList/HomeMovieList';
import { Container } from '@chakra-ui/react';

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
    <section>
      <Container margin={`0 auto`} maxW={`1440px`} p={`0 15px`}>
        <HomeMovieList movies={movies} />
      </Container>
    </section>
  );
};

export default HomePage;
