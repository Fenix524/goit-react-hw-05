import css from "./Loader.module.css";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loaderWraper}>
      <Triangle
        visible={true}
        height="130"
        width="130"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
