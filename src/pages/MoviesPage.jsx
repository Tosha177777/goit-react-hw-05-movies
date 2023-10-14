import React, { useEffect } from 'react';
import { ReactComponent as SearchImg } from '../assets/images/search.svg';
import { useSearchParams } from 'react-router-dom';
import fetchMovies from 'components/Service/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  // const [movie, setMovie] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  //   const [page, setPage] = useState(1);
  useEffect(() => {
    if (!query) return;
    const fetchAllMovies = async () => {
      // setIsLoading(true);
      try {
        const dataMovies = await fetchMovies(
          `search/movie/?query=${query}&include_adult=false`
        );
        // const results = dataMovies.results;
        // setMovie(dataMovies);
        console.log(dataMovies);
      } catch (error) {
        console.error(error);
      } finally {
        // setIsLoading(false);
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
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="searchMovieByName" required />
      </label>
      <button
        type="submit"
        style={{
          display: `inline-block`,
        }}
      >
        <SearchImg />
      </button>
    </form>
  );
};

export default MoviesPage;
