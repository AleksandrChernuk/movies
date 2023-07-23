import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router";
import { getMoviesDetails } from "../../services/getMovies";
import { NavLink } from "react-router-dom";
import {
  BackLink,
  Image,
  ContentWrapp,
  GenresList,
  GenresItem,
  AdditionalWrapp,
  AdditionaLink,
} from "./MovieDetails.Styled";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const goBackLinck = location.state?.from ?? "/movies";
  useEffect(() => {
    setIsLoading(true);
    getMoviesDetails(movieId)
      .then((r) => setMovie(r))
      .catch((er) => setError(er))
      .finally(() => setIsLoading(false));
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <BackLink to={goBackLinck}>Go back</BackLink>

      {movie && (
        <>
          <ContentWrapp>
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                width="500px"
              />
            </div>
            <div>
              <div>
                <h2>{movie.original_title}</h2>
              </div>
              <h6>Rating: {Math.floor(movie.vote_average)} </h6>
              <div>
                <h6>Overview:</h6>
                <p>{movie.overview}</p>
              </div>{" "}
              <div>
                <h6>Genres:</h6>
                <GenresList>
                  {movie.genres?.map((genre) => (
                    <GenresItem key={genre.id}>{genre.name}</GenresItem>
                  ))}
                </GenresList>
              </div>
            </div>
          </ContentWrapp>

          <h5>Additional information</h5>

          <AdditionalWrapp>
            <AdditionaLink to="cast" state={location.state}>
              Cast
            </AdditionaLink>
            <AdditionaLink to="reviews" state={location.state}>
              Reviews
            </AdditionaLink>
          </AdditionalWrapp>

          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
