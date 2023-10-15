import CastComponent from 'components/Cast/CastComponent';
import fetchMovies from 'components/Service/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const { movieId } = useParams();
  const [actor, setActor] = useState([]);
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const dataMovies = await fetchMovies(`movie/${movieId}/credits`);
        setActor(dataMovies.cast);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMovies();
  }, [movieId]);

  return (
    <div>
      <CastComponent actors={actor} />
    </div>
  );
};

export default CastPage;
