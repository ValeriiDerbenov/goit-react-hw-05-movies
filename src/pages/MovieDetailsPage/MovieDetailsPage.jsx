import { fetchMovieDetails } from "components/api/Api";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const MovieDetailsPage = () => {
	const {id} = useParams();
	// console.log(id)
	const [movieDetails, setMovieDetails] = useState({});
	// const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				setLoading(true);
				const movieDetails = await fetchMovieDetails(id);
				setMovieDetails(movieDetails);
				// setGenres(movieDetails.genres);
				
				console.log(movieDetails.genres)
			}
			catch (error) {
				// console.log(error);
				setError(error);
			}
			finally {
				setLoading(false);
			}
		}
		getMovieDetails();
	}, [id]);

	
				// console.log(movieDetails);

	return (
		// const {title, poster_path, genres} = movieDetails;

		<div>
			{loading && <p>{FadeLoader}</p>}
			{/* {loading && <p>...Loading</p>} */}
			<button onClick={() => navigate(-1)} type="button">Go back</button>
			<div>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png`
            }
            alt={movieDetails.title}
            width="280"
          />
        </div> 
			{error && <p>Error: {error}</p>}
			{movieDetails && (
				<h1>{movieDetails.title}</h1>
			)}
			{movieDetails.vote_average && (
				<p>User score: {movieDetails.vote_average}%</p>
			)}
			<h3>Overview</h3>
          <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
			
					{/* <ul>
            {movieDetails.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul> */}
			 <h3>Additional information</h3>
			 <ul>
				<li>
					<Link to=
					{
						{pathname: `/movies/${id}/cast`}
				
					}
					// {"cast"}
					>Cast</Link>
				</li>
				<li>
					<Link to={"reviews"}>Reviews</Link>
				</li>
			 </ul>
		</div>
	)
}

export default MovieDetailsPage;