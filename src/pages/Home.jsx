import { MovieList } from 'components/MovieList/MovieList';
import { useLocation } from "react-router-dom";
import { getTrandingMovie } from '../api/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrandFilms = async () => {
      try {
        const res = await getTrandingMovie();
        setTrandMovie(res);

      } catch (error) {
        console.log(error.message)
      }
    };

    getTrandFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movie={trandMovie} location={location} />
    </>
  )
};

export default Home;