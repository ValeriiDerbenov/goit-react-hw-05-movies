import { lazy, Suspense } from "react";
// import TrendingPage from "pages/TrendingPage/TrendingPage";
// import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
// import MoviesSearchPage from "pages/MoviesSearchPage/MoviesSearchPage";
// import NotFoundPage from "pages/NotFoundPage/NotFoundPage/NotFoundPage";
// import MovieDetailsPage from "pages/MovieDetailsPage/MovieDetailsPage";
// import Cast from "../pages/CastPage/CastPage";
// import Reviews from "../pages/ReviewsPage/ReviewsPage";
// import AppRoutes from "./AppRoutes/AppRoutes";

const TrendingPage = lazy(() => import('pages/TrendingPage/TrendingPage'));
const Header = lazy(() => import("./Header/Header"));
const MoviesSearchPage = lazy(() => import("pages/MoviesSearchPage/MoviesSearchPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("../pages/CastPage/CastPage"));
const Reviews = lazy(() => import("../pages/ReviewsPage/ReviewsPage"));



export const App = () => {
  return (

    <div>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path='/' element={<TrendingPage />}></Route>
        <Route path='/movies' element={<MoviesSearchPage />}></Route>
        <Route path='/movies/:id' element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="/movies/:id/cast" element={<Cast />} />
        <Route path="/movies/:id/reviews" element={<Reviews />} /> */}
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes> 
      </Suspense>
    </div>
  );
};




