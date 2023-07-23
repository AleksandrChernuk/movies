import { Route, Routes } from "react-router";
import Home from "../pages/HomePage/Home";
import Layout from "./Layout/Layout";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Container from "@mui/material/Container";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews.jsx";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
