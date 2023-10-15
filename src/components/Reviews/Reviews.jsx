import React from 'react';
import css from './Reviews.module.css';

const Reviews = ({ comments }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';
  return (
    <>
      {comments && comments.length > 0 ? (
        <ul className={css.reviewsList}>
          {comments.map(
            ({
              author_details: { name, avatar_path, username },
              content,
              created_at,
              id,
              updated_at,
            }) => {
              return (
                <li key={id}>
                  <div>
                    <img
                      src={
                        avatar_path
                          ? `https://image.tmdb.org/t/p/w200${avatar_path}`
                          : defaultImg
                      }
                      alt=""
                      style={{
                        borderRadius: `50%`,
                        overflow: 'hidden',
                      }}
                    />
                  </div>
                  <h2>{username}</h2>
                  <p>{name}</p>
                  <p>Created at: {created_at}</p>
                  <p className={css.reviewsContent}>{content}</p>
                  <p>Updated at: {updated_at}</p>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <p>Sorry, there're no comments yet</p>
      )}
    </>
  );
};

export default Reviews;
