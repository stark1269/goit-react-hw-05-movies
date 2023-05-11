import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { getMovieCast } from "api/api";
import { List } from "./Cats.styled";

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const {cast} = await getMovieCast(movieId);
        setMovie(cast);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <List>
      {movie.map(item => {
        return (
          <li key={item.id}>
            <img src={item.profile_path ? `https://image.tmdb.org/t/p/w200/${item.profile_path}` : ''} alt={item.name} />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        )
      })}
    </List>
  )
};

export default Cast