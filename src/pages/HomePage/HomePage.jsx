import css from "./HomePage.module.css";
import { getBestDayFilms } from "../../api";
import { useEffect, useState } from "react";
import FilmList from "../../components/FilmList/FilmList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(false);

      getBestDayFilms()
        .then((data) => {
          // console.log("data", data.results);
          setFilms(data.results);
          setError(false);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  return (
    <div className={css.homePage}>
      {films && (
        <>
          <h1>Trending today</h1>
          <FilmList films={films} />
        </>
      )}
      {loading && <Loader />}
      {error && <p>Something went wrong, try reloading the page!</p>}
    </div>
  );
};

export default HomePage;
