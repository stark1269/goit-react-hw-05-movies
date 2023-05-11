import { useRef } from "react";
import { Container, Span, Title, Wrapper, Text, Link, Main, NavLink } from "./MovieCard.styled";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } = movie;
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const poster = poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}` : '';
  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear();
  const userScore = `${(vote_average * 10).toFixed(0)}%`;

  return (
    <Main>
      <Link to={backLink.current}>Go Back</Link>
      <Container>
        <img src={poster} alt={title} />
        <Wrapper>
          <Title>{title} ({releaseYear})</Title>
          <p>User Score: {userScore}</p>
          <Text><Span>Overview</Span>{overview}</Text>
          {genres && <Text><Span>Genres</Span>{genres.map(item => item.name).join(', ')}</Text>}
        </Wrapper>
      </Container>
      <Wrapper>
        <Title>Additional information</Title>
        <NavLink to={'cast'}>Cast</NavLink>
        <NavLink to={'reviews'}>Reviews</NavLink>
      </Wrapper>
    </Main>
  )
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string })
    ),
  }).isRequired,
};