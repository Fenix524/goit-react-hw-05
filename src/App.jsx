import { useState } from "react";
import clsx from "clsx";
import { Routes, Route, Outlet } from "react-router-dom";
import MovieCast from "./components/MovieCast/MovieCast";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieReviews from "./components/MovieReviews/MovieReviews";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const buildLinkClass = ({ isActive }) => {
    return clsx("link", isActive && "active");
  };

  return (
    <div className="pageWraper">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <Outlet /> */}
    </div>
  );
}

export default App;
