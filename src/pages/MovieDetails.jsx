import { getFullMovieInfo } from "api/api";
import { useParams, Outlet } from "react-router";
import { useEffect, useState } from 'react';
import { MovieCard } from "components/MovieCard/MovieCard";
import { Suspense } from "react";
import { TailSpin } from  'react-loader-spinner'

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getFilmInfo = async () => {
      try {
        const res = await getFullMovieInfo(movieId);
        setMovie(res);
      } catch (error) {
        console.log(error.message)
      };
    };

    getFilmInfo();
  }, [movieId]);

  return (
    <>
      <MovieCard movie={movie} />
      <Suspense fallback={<TailSpin />}>
        <Outlet />
      </Suspense>
    </>
  )
};

export default MovieDetails