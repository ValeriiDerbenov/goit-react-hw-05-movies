import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'components/api/Api';
import TrendingMovieList from 'components/TrendingMovieList/TrendingMovieList';

const TrendingPage = () => {
	const [trending, setTrending] = useState([]);
	const [loading, setLoading] = useState([]);
	const [error, setError] = useState([]);

	useEffect(() => {
		const getTrending = async () => {
			try {
				setLoading(true);
				setTrending(await fetchMovies());
			}
			catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		getTrending();
	}, []);

	return (
		<div>
			{loading && <p>...Loading</p>}
			{error && <p>{error}</p>}
			<h1>Trending today</h1>
			<TrendingMovieList movies={trending} />
		</div>
	)
}

export default TrendingPage;