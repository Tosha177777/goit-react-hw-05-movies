import React from 'react';
import css from './Details.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import CastPage from 'pages/CastPage';
import ReviewsPage from 'pages/ReviewsPage';

const MovieDetails = ({ movie }) => {
  return (
    <div className={css.detailsContainer}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
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
            <Routes>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
