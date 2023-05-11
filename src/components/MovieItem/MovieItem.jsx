import { Link } from "./MovieItem.styled";
import PropTypes from 'prop-types';

export const MovieItem = ({ movie, location }) => {
  return (
    <li>
      <Link state={{from: location}} to={`/movies/${movie.id}`}>{ movie.title }</Link>
    </li>
  )
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape().isRequired,
};