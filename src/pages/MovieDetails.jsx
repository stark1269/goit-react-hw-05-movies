import { getFullMovieInfo } from "api/api";
import { useParams, Outlet } from "react-router";
import { useEffect, useState } from 'react';
import { MovieCard } from "components/MovieCard/MovieCard";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
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
      <Outlet />
    </>
  )
};

export default MovieDetails