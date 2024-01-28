import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

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
      <Suspense fallback={<div>...Loading page</div>}>
      <Routes>
        <Route path='/' element={<TrendingPage />}></Route>
        <Route path='/movies' element={<MoviesSearchPage />}></Route>
        <Route path='/movies/:id' element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes> 
      </Suspense>
    </div>
  );
};




