import CastComponent from 'components/Cast/CastComponent';
import fetchMovies from 'components/Service/api';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const { movieId } = useParams();
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchAllMovies = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await fetchMovies(`movie/${movieId}/credits`);
        setActor(dataMovies.cast);
        console.log(dataMovies.cast);
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
        <CastComponent actors={actor} />
      )}
    </div>
  );
};

export default CastPage;
