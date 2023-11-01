import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { lazy } from 'react';
import { Container } from '@chakra-ui/react';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

const App = () => {
  return (
    <Container maxW={`1440px`}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
