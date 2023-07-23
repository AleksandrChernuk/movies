import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import s from "./Movies.module.css";
import { getMoviesByName } from "../../services/getMovies";

import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const query = searchParams.get("query") ?? "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    if (!value.trim()) {
      return;
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    getMoviesByName(query)
      .then((r) => setMovie(r))
      .catch((er) => setError(er))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField fullWidth label="Введите название" id="fullWidth" name="query" />
        <Button variant="contained" color="success" type="subbmit">
          Поиск
        </Button>
      </form>
      {isLoading && <div>Loading...</div>}
      {movie && <MoviesList list={movie} />}
    </>
  );
};

export default MoviesPage;
