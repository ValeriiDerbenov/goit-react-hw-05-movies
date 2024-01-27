import { useState } from "react"
import { useParams } from "react-router-dom";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const {id} = useParams();
	
	

	return (
		<h2>Reviews</h2>
	)
}

export default Reviews;