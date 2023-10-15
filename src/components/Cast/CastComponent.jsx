import React from 'react';
import css from './Cast.module.css';

const CastComponent = ({ actors }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';
  return (
    <ul className={css.movie_List}>
      {actors.map(({ id, character, name, popularity, profile_path }) => {
        return (
          <li key={id} className={css.movie_card}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultImg
              }
              alt=""
            />
            <div className={css.castBox}>
              <h2 className={css.titleMain}>{character}</h2>
              <p>Name: {name}</p>
              <p>Popularity: {popularity}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CastComponent;
