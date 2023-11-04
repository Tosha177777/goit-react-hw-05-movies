import { Container } from '@chakra-ui/react';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import fetchMovies from 'components/Service/api';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchAllMovies = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await fetchMovies(`movie/${movieId}`);
        setMovie(dataMovies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllMovies();
  }, [movieId]);

  return (
    <section>
      <Container margin={`0 auto`} maxW={`1440px`} p={`0 15px`}>
        {isLoading && <ColorRing visible={isLoading} />}

        {movie && <MovieDetails movie={movie} />}
      </Container>
    </section>
  );
};

export default MovieDetailsPage;
