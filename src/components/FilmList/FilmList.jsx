import { Link, useLocation } from "react-router-dom";
import css from "./FilmList.module.css";
import { generateImgPath } from "../../api";
import getCurrentPath from "../../js/getLocation";

const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <div className={css.filmList}>
      <ul className={css.list}>
        {films.map(({ id, title, backdrop_path, overview }) => (
          <li key={id}>
            <Link className={css.item} to={`/movies/${id}`} state={{from: location}}>
              <img className={css.poster} src={generateImgPath(backdrop_path)} />  
              <div className={css.textPart}>
                <h3 className={css.title}>{title}</h3>
                <p className={css.desc}>{overview}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
