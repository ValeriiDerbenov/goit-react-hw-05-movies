// import { ContactList } from "components/ContactList/ContactList";
import { SearchBox } from "components/SearchBox/SearchBox";
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TrendingMovieList from "components/TrendingMovieList/TrendingMovieList";
import { fetchSearchMovies } from "components/api/Api";

const MoviesSearchPage = () => {

		const [searchParams, setSearchParams] = useSearchParams();
		const movieName = searchParams.get('movie') ?? '';
		const [movies, setMovies] = useState([]);
		const [loading, setLoading] = useState([]);
		const [error, setError] = useState([]);
		// console.log('movieName :>> ', movieName);
	
		useEffect(() => {
			const getMovies = async () => {
				try {
					setLoading(true);
					setMovies(await fetchSearchMovies(movieName));
				} catch (error) {
					setError(error.message);
				} finally {
					setLoading(false);
				}
			};
			getMovies();
		}, [movieName]);
	
		const handleSubmit = e => {
			e.preventDefault();
			const searchQuery = e.currentTarget.elements.input.value;
			// console.log('searchQuery :>> ', searchQuery);
			setSearchParams({ movie: searchQuery });
			e.target.reset();
		};

	return (
		<div>
			{loading && <p>...Loading</p>}
			{error && <p>{error}</p>}
			<h1>Search</h1>
			<SearchBox onSubmit={handleSubmit} />
			<TrendingMovieList movies={movies} />
		</div>
		)
	}

export default MoviesSearchPage;