import { getFullMovieInfo } from "api/api";
import { useParams, Outlet } from "react-router";
import { useEffect, useState } from 'react';
import { MovieCard } from "components/MovieCard/MovieCard";
import { Suspense } from "react";
import { TailSpin } from  'react-loader-spinner'

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoader, setIsLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getFilmInfo = async () => {
      try {
        setIsLoader(true);
        const res = await getFullMovieInfo(movieId);
        setMovie(res);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoader(false);
      }
    };

    getFilmInfo();
  }, [movieId]);

  return (
    <>
      {isLoader ? <TailSpin /> : <MovieCard movie={movie} />}
      <Suspense fallback={<TailSpin />}>
        <Outlet />
      </Suspense>
    </>
  )
};

export default MovieDetails