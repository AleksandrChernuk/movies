import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { getMoviesCast } from "../../services/getMovies";
import { CardImage, CastItem, CastItemText, CastList } from "./Cast.Styled";

const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";
const PLACEHOLDER = "https://via.placeholder.com/182x273";

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getMoviesCast(movieId).then((r) => setCast(r));
  }, [movieId]);

  console.log(cast);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map((e) => (
            <CastItem item key={e.id}>
              <CardImage
                src={`${e.profile_path ? BASE_POSTER_URL + e.profile_path : PLACEHOLDER + "?text=" + e.original_name}`}
                alt="green iguana"
              />

              <CastItemText>
                <span>Actor: </span>
                {e.original_name}
              </CastItemText>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};
export default Cast;
