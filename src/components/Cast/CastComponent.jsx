import React from 'react';
import css from './Cast.module.css';

const CastComponent = ({ actors }) => {
  return (
    <ul className={css.movie_List}>
      {actors.map(({ id, character, name, popularity, profile_path }) => {
        return (
          <li key={id} className={css.movie_card}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt=""
            />
            <h2 className={css.titleMain}>{character}</h2>
            <p>Name: {name}</p>
            <p>Popularity: {popularity}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastComponent;
