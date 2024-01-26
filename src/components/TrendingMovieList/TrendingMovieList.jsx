import { Link } from "react-router-dom";

const TrendingMovieList = ({movies}) => {

	return (
		<ul>
			{movies.map(({ id, title }) => (
				<li key={id}>
					<Link
            to={{
              pathname: `/movies/${id}`,
              // state: { from: setlocation },
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