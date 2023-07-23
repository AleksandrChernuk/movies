import { ItemLink, List } from "./MoviesList.Styled";
import { useLocation } from "react-router-dom";

const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <List>
      {list.map((e) => (
        <li key={e.id}>
          <ItemLink to={`/movies/${e.id}`} state={{ from: location }}>
            {e.title ?? "No title"}
          </ItemLink>
        </li>
      ))}
    </List>
  );
};
export default MoviesList;
