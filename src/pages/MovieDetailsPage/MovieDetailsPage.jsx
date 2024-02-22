import { Link, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { getFilmsByID } from "../../api";
import { useEffect, useRef, useState } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (!movieId) return;

    setLoading(true);
    setError(false);

    getFilmsByID(movieId)
      .then((data) => {
        setFilm(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div className={css.MovieDetailsPage}>
      <Link to={backLink.current} className={css.goBackBtn}>
        Back
      </Link>
      {film && <MovieInfo film={film} />}
      {loading && <Loader />}
      {error && <p>Something went wrong, try reloading the page!</p>}
    </div>
  );
};

export default MovieDetailsPage;
