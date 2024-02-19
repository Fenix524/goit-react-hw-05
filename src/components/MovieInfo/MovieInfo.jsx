import { NavLink, Outlet, useNavigate } from "react-router-dom";
import css from "./MovieInfo.module.css";
import { generateImgPath } from "../../api";

const MovieInfo = ({
  film: { backdrop_path, original_title, overview, genres },
}) => {
  return (
    <>
      
      <div className={css.movieInfo}>
        <img src={generateImgPath(backdrop_path)} alt="" className={css.img} />
        <div className={css.textSide}>
          <h2 className={css.title}>{original_title}</h2>

          <h3 className={css.title2}>Overview</h3>
          <p className={css.text}>{overview}</p>

          <h3 className={css.title2}>Ganres</h3>
          <p className={css.text}>
            {genres.map((ganre) => ganre.name).join(" ")}
          </p>
        </div>
      </div>
      <div className={css.bottom}>
        <h2 className={css.title}>Additional information</h2>
        <NavLink to="cast" className={css.link} replace={true}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.link} replace={true}>
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default MovieInfo;
