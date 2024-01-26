import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'components/api/Api';
import TrendingMovieList from 'components/TrendingMovieList/TrendingMovieList';

const TrendingPage = () => {
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		const getTrending = async () => {
			try {
				setTrending(await fetchMovies());
			}
			catch (error) {
				console.log(error);
			}
		}
		getTrending();
	}, []);

	return (
		<div>
			<h1>Trending today</h1>
			<TrendingMovieList movies={trending} />
		</div>
	)
}

export default TrendingPage;