import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const TrendingMovieList = ({movies}) => {
	const location = useLocation();

	return (
		<ul>
			{movies.map(({ id, title }) => (
				<li key={id}>
					<Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
				</li>
			))

			}
		</ul>
	)
}

export default TrendingMovieList;

PropTypes.MoviesList = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};