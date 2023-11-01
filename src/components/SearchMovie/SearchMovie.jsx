import React from 'react';
import css from './Search.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';

const SearchMovie = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';
  return (
    <ul className={css.movie_List} style={{ marginTop: `15px` }}>
      {movies.map(({ id, title, vote_average, vote_count, poster_path }) => {
        return (
          <li key={id}>
            <Link
              state={{ from: location }}
              to={`/movies/${id}`}
              className={css.movieLink}
            >
              <Card maxW="200px" h={`359px`}>
                <CardBody>
                  <Image
                    h={`240px`}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w200${poster_path}`
                        : defaultImg
                    }
                    alt=""
                    borderRadius="lg"
                  />
                  <Stack mt="8px" spacing="1.5px">
                    <Heading
                      fontSize={`16px`}
                      textOverflow={`ellipsis`}
                      overflow={`hidden`}
                      whiteSpace={`nowrap`}
                    >
                      {title}
                    </Heading>
                    <Text color={`grey`}>Rating: {vote_average}</Text>
                    <Text color={`grey`}>Vote Count: {vote_count}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchMovie;
