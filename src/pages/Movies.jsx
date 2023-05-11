import { getSearchMovie } from "api/api";
import { MovieForm } from "components/MovieForm/MovieForm";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { MovieList } from "components/MovieList/MovieList";

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return
    }

    const getMovie = async () => {
      try {
        const res = await getSearchMovie(query);
        setMovie(res)
      } catch (error) {
        
      }
    }

    getMovie();

  }, [searchParams])

  const handlerSubmit = (query) => {
    setSearchParams({ query });
  };

  return (
    <>
      <MovieForm onSubmit={handlerSubmit} />
      {movie.length ? <MovieList movie={movie} location={location} /> : <h1>Movie search</h1>}
    </>
  )
};

export default Movie;