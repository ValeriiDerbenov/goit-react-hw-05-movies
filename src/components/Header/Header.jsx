import styles from './header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<ul className={styles.menu}>
			<li>
				<Link className={styles.link} to="/">Home</Link>
			</li>
			<li>
				<Link className={styles.link} to="/">Movies</Link>
			</li>
		</ul>
	)
}

export default Header