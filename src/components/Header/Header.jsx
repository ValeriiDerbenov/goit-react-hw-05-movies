import styles from './header.module.css'


const Header = () => {
	return (
		<ul className={styles.menu}>
			<li>
				<a className={styles.link} href="/">Home</a>
			</li>
			<li>
				<a className={styles.link} href="/">Movies</a>
			</li>
		</ul>
	)
}

export default Header