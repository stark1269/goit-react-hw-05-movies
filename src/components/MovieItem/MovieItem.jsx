import { Link } from "./MovieItem.styled";

export const MovieItem = ({ movie, location }) => {
  return (
    <li>
      <Link state={{from: location}} to={`/movies/${movie.id}`}>{ movie.title }</Link>
    </li>
  )
};