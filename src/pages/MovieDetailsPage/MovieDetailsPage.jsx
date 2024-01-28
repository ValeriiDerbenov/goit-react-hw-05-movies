import { fetchMovieDetails } from "components/api/Api";
import { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate, Outlet, useLocation } from "react-router-dom";

const MovieDetailsPage = () => {
	const {id} = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const location = useLocation();
	const backLinkLocation = useRef(location.state?.from ?? '/movies');

	const navigate = useNavigate();

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				setLoading(true);
				const movieDetails = await fetchMovieDetails(id);
				setMovieDetails(movieDetails);
				setGenres(movieDetails.genres);
			}	catch (error) {
				setError(error);
			}	finally {
				setLoading(false);
			}
		}
		getMovieDetails();
	}, [id]);

	return (	
		<div>
			{loading && <p>...Loading</p>}
			{error && <p>{error}</p>}
			<button onClick={() => navigate(backLinkLocation.current)} type="button">Go back</button>
			<div>
          <img src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png`
          }
            alt={movieDetails.title}
            width="280"
          />
         
			<div>
			{error && <p>Error: {error}</p>}
			{movieDetails && (
				<h1>{movieDetails.title}</h1>
			)}
			{movieDetails.vote_average && (
				<p>User score: {movieDetails.vote_average*10}%</p>
			)}
			<h3>Overview</h3>
          <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
			<ul>
          {genres.map(({id, name}) => (
          <li key={id}>{name}</li>
          ))}
      </ul>
			</div>

			</div>
			<h3>Additional information</h3>
			<ul>
				<li><Link to="cast" 
				state={{ from: location.state?.from ?? '/' }}
				>Cast</Link></li>
				<li><Link to="reviews"
				 state={{ from: location.state?.from ?? '/' }}
				 >Reviews</Link></li>
				<Outlet />
			</ul>
		</div>
	)
}

export default MovieDetailsPage;