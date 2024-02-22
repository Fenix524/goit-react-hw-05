/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { getReviewsByID } from "../../api";
import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    setLoading(true);
    setError(false);
    getReviewsByID(movieId)
      .then((data) => {
        setReviews(data.results);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <div className={css.movieReviews}>
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.item}>
              <h3 className={css.title}>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        {!error && !reviews.length && (
          <p>There are no reviews for this movie</p>
        )}
      </div>
      {loading && <Loader />}
      {error && <p>Something went wrong, try reloading the page!</p>}
    </>
  );
};

export default MovieReviews;
