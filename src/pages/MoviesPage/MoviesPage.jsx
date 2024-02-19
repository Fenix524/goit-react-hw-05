import { useEffect, useState } from "react";
import { getFilmsByQuery } from "../../api";
import SearchFilmsForm from "../../components/SearchFilmsForm/SearchFilmsForm";
import css from "./MoviesPage.module.css";
import FilmList from "../../components/FilmList/FilmList";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilter, setSearchFilter] = useState(
    searchParams.get("query") || ""
  );
  const [filterFilmList, setFilterFilmList] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);

    getFilmsByQuery(searchFilter)
      .then((data) => {
        // console.log("filter", data);
        setFilterFilmList(data.results);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchFilter]);

  const searchFormSubmit = (value) => {
    setSearchParams({ query: value });
    setSearchFilter(value);
  };

  return (
    <div className={css.moviesPage}>
      <SearchFilmsForm filterValue={searchFilter} onSubmit={searchFormSubmit} />
      {!!filterFilmList?.length && <FilmList films={filterFilmList} />}
      {loading && <Loader />}
      {error && <p>Something went wrong, try reloading the page!</p>}
    </div>
  );
};

export default MoviesPage;
