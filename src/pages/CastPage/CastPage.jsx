import { fetchMovieCast } from "components/api/Api";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {

	const [cast, setCast] = useState([]);
	const [loading, setLoading] = useState([]);
	const [error, setError] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
				setLoading(true);
        setCast(await fetchMovieCast(id));
      } catch (error) {
        setError(error.message);
      } finally {
				setLoading(false);
			}
    };
    getMovieCast();
  }, [id]);

	// const isCast = Boolean(cast.length);
	// console.log('isCast :>> ', isCast);

	return (
		
		<>
		{loading && <p>...Loading</p>}
		{error && <p>{error}</p>}
		<h2>Cast</h2>
		<ul>
			{cast.map(actor => (
				<li key={actor.id}>
					<img
						src={
							actor.profile_path
								? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
								: `https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png`
						}
						alt={actor.name}
						width="150"
					/>
					<p>{actor.name}</p>
					<p>Character: {actor.character}</p>
				</li>
			))}
		</ul>
	</>
	)
}

export default Cast