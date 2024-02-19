import { Link, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { getFilmsByID } from "../../api";
import { useEffect, useRef, useState } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getFilmsByID(movieId)
    .then((data) => {
      setFilm(data);
      // console.log(data);
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [])

  

  // console.log(movieId);
  return <div className={css.MovieDetailsPage}>
    <Link to={backLink.current} className={css.goBackBtn}>
        Back
      </Link>
   {film && <MovieInfo film={film}/>}
  </div>;
};

export default MovieDetailsPage;
