import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import s from './Header.module.css';
import { NavLink as ReactRouterNavLink, Outlet } from 'react-router-dom';
import { Link as ChakraLink, Container, HStack } from '@chakra-ui/react';
const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Container margin={`0 auto`} maxW={`1440px`}>
          <nav>
            <HStack>
              <ChakraLink
                transition={`all 0.5s`}
                _active={{ background: 'skyblue', color: `white` }}
                _focus={{ background: 'skyblue', color: `white` }}
                _hover={{
                  background: 'skyblue',
                  color: `white`,
                }}
                fontWeight={`500`}
                p={`10px 10px`}
                borderRadius={`6px`}
                color={`skyblue`}
                as={ReactRouterNavLink}
                to="/"
              >
                Home
              </ChakraLink>
              <ChakraLink
                transition={`all 0.5s`}
                _active={{ background: 'skyblue', color: `white` }}
                _focus={{ background: 'skyblue', color: `white` }}
                _hover={{
                  background: 'skyblue',
                  color: `white`,
                }}
                fontWeight={`500`}
                p={`10px 10px`}
                borderRadius={`6px`}
                color={`skyblue`}
                as={ReactRouterNavLink}
                to="/movies"
              >
                Movies
              </ChakraLink>
            </HStack>
          </nav>
        </Container>
      </header>
      <Suspense fallback={<ColorRing visible={true} />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
