import MovieDetails from 'components/MovieDetails/MovieDetails';
import fetchMovies from 'components/Service/api';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchAllMovies = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await fetchMovies(`movie/${movieId}`);
        setMovie(dataMovies);
        console.log(dataMovies.backdrop_path); //ошибка при подгрузке изображения на странице детальной информации "backdrop_path"
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllMovies();
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <ColorRing visible={isLoading} />
      ) : (
        <MovieDetails movie={movie} />
      )}
    </div>
  );
};

export default MovieDetailsPage;
