import css from "./BackBtn.module.css";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button onClick={handleGoBack}>
      Back
    </button>
  );
};

export default BackButton;