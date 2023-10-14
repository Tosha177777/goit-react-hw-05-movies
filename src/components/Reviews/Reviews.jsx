import React from 'react';
import css from './Reviews.module.css';

const Reviews = ({ comments }) => {
  return (
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
                  src={`https://image.tmdb.org/t/p/w200${avatar_path}`}
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
  );
};

export default Reviews;
