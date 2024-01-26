import styles from './header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<ul className={styles.menu}>
			<li>
				<NavLink className={styles.link} to="/">Home</NavLink>
			</li>
			<li>
				<NavLink className={styles.link} to="/movies">Movies</NavLink>
			</li>
		</ul>
	)
}

export default Header