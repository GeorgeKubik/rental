
	import styles from './NewsBlock.module.scss';
	import NewsList from '../NewsList/index';
	
	const NewsBlock = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Новости</h2>
					<ul className={styles.list}>
						<NewsList/>
					</ul>
					<button className={styles.btn}>Посмотреть все</button>
				</div>
			</>
		)
	}

	export default NewsBlock;