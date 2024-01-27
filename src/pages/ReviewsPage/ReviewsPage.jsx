import { fetchReviews } from "components/api/Api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const {id} = useParams();
	const [loading, setLoading] = useState([]);
	const [error, setError] = useState([]);
	
	useEffect(() => {
    const getMovieReviews = async () => {
      try {
				setLoading(true);
        setReviews(await fetchReviews(id));
      } catch (error) {
        setError(error.message);
      } finally {
				setLoading(false);
			}
    };
    getMovieReviews();
  }, [id]);

	return (
	<>
		{loading && <p>...Loading</p>}
		{error && <p>{error}</p>}
		<h2>Reviews</h2>
		<ul>
			{reviews.length === 0 ? (
				<p>We don't have any reviews for this movie.</p>
			) : (
				reviews.map(({id, author, content}) => (
					<li key={id}>
						<h3>Author: {author}</h3>
						<p>{content}</p>
					</li>
				))
			)}
		</ul>
	</>
	)
}

export default Reviews;