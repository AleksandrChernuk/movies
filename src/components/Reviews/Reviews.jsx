import { useParams } from "react-router";
import { getMoviesReviews } from "../../services/getMovies";
import { useEffect, useState } from "react";
import { ReviewsItem, ReviewsList } from "./Reviews.Styled";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMoviesReviews(movieId)
      .then((r) => setReviews(r))
      .catch((er) => setError(er))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.map((e) => (
            <ReviewsItem>
              <h5>{e.author}</h5>
              <p>{e.content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
