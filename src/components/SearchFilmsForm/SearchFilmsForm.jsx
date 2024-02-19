import css from "./SearchFilmsForm.module.css";
import { IoSearch } from "react-icons/io5";

const SearchFilmsForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.query.value);
  };

  return (
    <form className={css.searchFilmsForm} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        placeholder="Search films..."
        required
      />
      <button className={css.btn} type="submit">
        <IoSearch size={30} color="#fff" />
      </button>
    </form>
  );
};

export default SearchFilmsForm;
