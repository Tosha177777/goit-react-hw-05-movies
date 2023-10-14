import React from 'react';
import { Link } from 'react-router-dom';
import css from './HomeMovieList.module.css';

const HomeMovieList = ({ movies }) => {
  return (
    <ul className={css.movie_List}>
      {movies.map(({ id, title, vote_average, vote_count, poster_path }) => {
        return (
          <li key={id} className={css.movie_card}>
            <Link to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt=""
                className={css.imageHome}
              />
              <h2 className={css.titleMain}>{title}</h2>
              <p>Rating: {vote_average}</p>
              <p>Vote Count: {vote_count}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeMovieList;
