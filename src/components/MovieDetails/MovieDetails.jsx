import React, { Suspense, lazy, useRef } from 'react';
import { ReactComponent as BackBtn } from '../../assets/backbtn.svg';
import css from './Details.module.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

const MovieDetails = ({ movie }) => {
  console.log('movie: ', movie);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x281';
  return (
    <div className={css.detailsContainer}>
      <Link to={backLink.current}>
        <BackBtn />
      </Link>
      <Box>
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
        />
      </Box>
      <div className={css.infoBox}>
        <Heading>{movie.title}</Heading>
        <Text fontSize={'18px'} className={css.detPar}>
          {movie.overview}
        </Text>
        <div>
          <div className={css.castAndReview}>
            <Link to={`cast`}>Cast</Link>
            <Link to={`reviews`}>Review</Link>
          </div>
          <div>
            <Suspense fallback={<ColorRing visible={true} />}>
              <Container maxWidth={`1200px`}>
                <Routes>
                  <Route path="cast" element={<CastPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                </Routes>
              </Container>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
