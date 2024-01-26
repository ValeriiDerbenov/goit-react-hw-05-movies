import TrendingPage from "pages/TrendingPage/TrendingPage";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import MoviesSearchPage from "pages/MoviesSearchPage/MoviesSearchPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "pages/MovieDetailsPage/MovieDetailsPage";


export const App = () => {
  return (

    <div>
      <Header />
      <Routes>
        <Route path='/' element={<TrendingPage />}></Route>
        <Route path='/movies' element={<MoviesSearchPage />}></Route>
        <Route path='/movies/:id' element={<MovieDetailsPage />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes> 
    </div>
  );
};




