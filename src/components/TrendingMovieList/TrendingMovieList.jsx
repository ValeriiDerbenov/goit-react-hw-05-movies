import { Link } from "react-router-dom";

const TrendingMovieList = ({movies}) => {

	return (
		<ul>
			{movies.map(movie => (
				<li key={movie.id}>
					<Link
            to={{
              pathname: `/movies/${movie.id}`,
              // state: { from: setlocation },
            }}
          >
            {movie.title}
          </Link>
				</li>
			))

			}
		</ul>
	)
}

export default TrendingMovieList;