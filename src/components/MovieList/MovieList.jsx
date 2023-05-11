import { MovieItem } from "components/MovieItem/MovieItem";
import { Section, List } from "./MovieList.styled";

export const MovieList = ({ movie, location }) => {
  return (
    <Section>
      <List>
        {movie.map(item => <MovieItem key={item.id} movie={item} location={location} />)}
      </List>

    </Section>
  )
};