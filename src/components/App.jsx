import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Home from '../pages/Home';
import Movie from '../pages/Movies';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/movie'} element={<Movie />} />

        <Route path={'/movies/:movieId'} element={<MovieDetails />}>
          <Route path={'cast'} element={<Cast />} />
          <Route path={'reviews'} element={<Reviews />} />
        </Route>

        <Route path={'*'} element={<Navigate to="/" />} />

      </Routes>
    </>
  );
};