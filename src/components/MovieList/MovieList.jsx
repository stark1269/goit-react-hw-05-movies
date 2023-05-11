import { MovieItem } from "components/MovieItem/MovieItem";
import { Section, List } from "./MovieList.styled";
import PropTypes from 'prop-types';

export const MovieList = ({ movie, location }) => {
  return (
    <Section>
      <List>
        {movie.map(item => <MovieItem key={item.id} movie={item} location={location} />)}
      </List>

    </Section>
  )
};

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  location: PropTypes.shape().isRequired,
};