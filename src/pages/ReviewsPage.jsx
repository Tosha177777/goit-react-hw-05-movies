import Reviews from 'components/Reviews/Reviews';
import fetchMovies from 'components/Service/api';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchAllMovies = async () => {
      setIsLoading(true);
      try {
        const dataMovies = await fetchMovies(`movie/${movieId}/reviews`);
        setComments(dataMovies.results);
        console.log(dataMovies.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllMovies();
  }, [movieId]);

  const showContent = Array.isArray(comments) && comments.length;
  return (
    <>
      {showContent ? (
        <Reviews comments={comments} />
      ) : (
        <ColorRing visible={isLoading} />
      )}
    </>
  );
};

export default ReviewsPage;
