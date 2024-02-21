/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import { getCreditsByID, generateImgPath } from "../../api";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    setLoading(true);
    setError(false);
    getCreditsByID(movieId)
      .then((data) => {
        // console.log(data);
        setCast(data.cast);
      })
      .catch((error) => {
        // console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <ul className={css.MovieCast}>
        {cast.map(({ id, original_name, character, profile_path }) => {
          return (
            <li key={id} className={css.item}>
              <img src={generateImgPath(profile_path)} className={css.img} />
              <div>
                <p className={css.name}>{original_name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {loading && <Loader />}
      {error && <p>Something went wrong, try reloading the page!</p>}
    </>
  );
};

export default MovieCast;
