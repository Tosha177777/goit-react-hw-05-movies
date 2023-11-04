import React, { useEffect, useState } from 'react';
import { ReactComponent as SearchImg } from '../assets/images/search.svg';
import { useSearchParams } from 'react-router-dom';
import fetchMovies from 'components/Service/api';
import { ColorRing } from 'react-loader-spinner';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { Container, Input } from '@chakra-ui/react';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchAllMovies = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await fetchMovies(`search/movie?query=${query}`);
        setMovies(dataMovies.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchMovieByName.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <section>
      <Container margin={`0 auto`} maxW={`1440px`} p={`0 15px`}>
        <form
          onSubmit={handleSubmit}
          style={{ display: `flex`, alignItems: `center` }}
        >
          <label>
            <Input type="text" name="searchMovieByName" required />
          </label>
          <button
            type="submit"
            style={{
              display: `inline-block`,
              backgroundColor: `inherit`,
              border: `none`,
            }}
          >
            <SearchImg />
          </button>
        </form>
        {isLoading && <ColorRing visible={isLoading} />}
        {movies && <SearchMovie movies={movies} />}
      </Container>
    </section>
  );
};

export default MoviesPage;
