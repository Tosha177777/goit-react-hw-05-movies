import Reviews from 'components/Reviews/Reviews';
import fetchMovies from 'components/Service/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [comments, setComments] = useState(null);
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const dataMovies = await fetchMovies(`movie/${movieId}/reviews`);
        setComments(dataMovies.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMovies();
  }, [movieId]);

  return (
    <>
      <Reviews comments={comments} />
    </>
  );
};

export default ReviewsPage;
