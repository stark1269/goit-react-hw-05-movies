import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { getMovieReviews } from "api/api";
import { List } from "./Reviews.styled";

const Reviews = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setMovie(results);
      } catch (error) {
        console.log(error.message);
      }
    };

    getReviews();
  }, [movieId]);
  
  return (
    <>
      {movie.length ? (
        <List>
          {movie.map(item => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </List>
      ) : (
        <div>
          We don't have any reviews for this movie yet.
        </div>
      )}
    </>
  )
};

export default Reviews