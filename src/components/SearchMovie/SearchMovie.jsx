import React from 'react';
import css from './Search.module.css';
import { Link, useLocation } from 'react-router-dom';

const SearchMovie = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';
  return (
    <ul className={css.movie_List}>
      {movies.map(({ id, title, vote_average, vote_count, poster_path }) => {
        return (
          <li key={id} className={css.movie_card}>
            <Link
              state={{ from: location }}
              to={`/movies/${id}`}
              className={css.movieLink}
            >
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200${poster_path}`
                    : defaultImg
                }
                alt=""
                className={css.imageHome}
              />
              <div className={css.castBox}>
                <h2 className={css.titleMain}>{title}</h2>
                <p>Rating: {vote_average}</p>
                <p>Vote Count: {vote_count}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchMovie;
