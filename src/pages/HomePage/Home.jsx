import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/getMovies";
import { List, ListItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";

const Home = () => {
  const [trending, setTrending] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then((r) => {
        setTrending(r);
      })
      .catch((er) => setError(er))
      .finally(() => setIsLoading(false));
  }, []);
  console.log(trending);

  return (
    <>
      {isLoading && <div>Loading</div>}
      {trending && <MoviesList list={trending} />}
    </>
  );
};

export default Home;
