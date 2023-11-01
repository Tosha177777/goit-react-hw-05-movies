import React from 'react';
import css from './Cast.module.css';
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';

const CastComponent = ({ actors }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';
  return (
    <ul className={css.movie_List}>
      {actors.map(({ id, character, name, popularity, profile_path }) => {
        return (
          <li key={id}>
            <Card maxW="200px" h={`359px`}>
              <CardBody>
                <Image
                  h={`240px`}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
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
                    {character}
                  </Heading>
                  <Text
                    textOverflow={`ellipsis`}
                    overflow={`hidden`}
                    whiteSpace={`nowrap`}
                  >
                    Name: {name}
                  </Text>
                  <Text>Popularity: {popularity}</Text>
                </Stack>
              </CardBody>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default CastComponent;
