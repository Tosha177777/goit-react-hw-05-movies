import React, { Suspense, lazy, useRef } from 'react';
import { ReactComponent as BackBtn } from '../../assets/backbtn.svg';
import css from './Details.module.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
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
      <div>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : defaultImg
          }
          alt={movie.title}
        />
      </div>
      <div className={css.infoBox}>
        <h2>{movie.title}</h2>
        <p className={css.detPar}>{movie.overview}</p>
        <div>
          <div className={css.castAndReview}>
            <Link to={`cast`}>Cast</Link>
            <Link to={`reviews`}>Review</Link>
          </div>

          <div>
            <Suspense fallback={<ColorRing visible={true} />}>
              <Routes>
                <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
