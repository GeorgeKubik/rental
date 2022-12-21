	import styles from './Hamburger.module.scss';
	

	const Hamburger = () => {
		return (
			<>
				<div className={styles.wrapperHamburger}>
					<span className={`${styles.line} ${styles.line1}`}></span>
					<span className={`${styles.line} ${styles.line2}`}></span>
					<span className={`${styles.line} ${styles.line3}`}></span>
				</div>
			</>
		)
	}

	export default Hamburger;