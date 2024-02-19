import { useLocation } from "react-router-dom";

const getCurrentPath = () => {
  const location = useLocation();
  console.log(location.pathname + location.search);
  return location.pathname;
};

export default getCurrentPath;