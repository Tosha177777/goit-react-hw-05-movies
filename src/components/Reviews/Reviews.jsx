import React from 'react';
import css from './Reviews.module.css';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

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
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: '100%', sm: '200px' }}
                      src={
                        avatar_path
                          ? `https://image.tmdb.org/t/p/w200${avatar_path}`
                          : defaultImg
                      }
                      alt=""
                    />

                    <Stack>
                      <CardBody>
                        <CardHeader p={`0 0 0 20px`}>
                          <Text py="2" fontStyle={`italic`}>
                            Created at: {created_at}
                          </Text>
                        </CardHeader>
                        <Heading size="md">{username}</Heading>
                        <Text py="2">{name}</Text>
                        <Text py="2" h={`150px`} overflowY={`scroll`}>
                          {content}
                        </Text>

                        <CardFooter p={`0 0 0 20px`}>
                          <Text py="2" fontStyle={`italic`}>
                            Updated at: {updated_at}
                          </Text>
                        </CardFooter>
                      </CardBody>
                    </Stack>
                  </Card>
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
