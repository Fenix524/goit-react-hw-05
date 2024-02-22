import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader/Loader";

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div className="pageWraper">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
