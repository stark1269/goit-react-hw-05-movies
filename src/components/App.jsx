import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import { lazy, Suspense } from "react";
import { TailSpin } from  'react-loader-spinner'

const Home = lazy(() => import("../pages/Home"));
const Movie = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<TailSpin />}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/movie'} element={<Movie />} />

          <Route path={'/movies/:movieId'} element={<MovieDetails />}>
            <Route path={'cast'} element={<Cast />} />
            <Route path={'reviews'} element={<Reviews />} />
          </Route>

          <Route path={'*'} element={<Navigate to="/" />} />

        </Routes>
      </Suspense>
    </>
  );
};