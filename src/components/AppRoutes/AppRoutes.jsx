import TrendingPage from "pages/TrendingPage/TrendingPage";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import MoviesSearchPage from "pages/MoviesSearchPage/MoviesSearchPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "pages/MovieDetailsPage/MovieDetailsPage";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export const AppRoutes = () => {
	return (
		<>
			 <Header />
      <Routes>
        <Route path='/' element={<TrendingPage />}></Route>
        <Route path='/movies' element={<MoviesSearchPage />}></Route>
        <Route path='/movies/:id' element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes> 
		</>
	)
}

// export default AppRoutes;