
	import styles from './FlatsPageRecommendation.module.scss';
	import { ReactComponent as IconHous} from '../../../../assets/img/newsPage/hous.svg';
	
	const FlatsPageRecommendation = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.filters}>
							<div className={styles.subtitle}>
								<div><IconHous/></div>
								<div className={styles.subtitleText}>Квартиры в Минске</div>
							</div>
							<h1 className={styles.title}>Аренда квартир на сутки в Минске</h1>
							<div className={styles.recommendations}>
								<h3 className={styles.titleList}>Рекомендуем посмотреть</h3>
								<ul className={styles.list}>
									<li className={styles.listItem}>Недорогие</li>
									<li className={styles.listItem}>1-комнатные</li>
									<li className={styles.listItem}>2-комнатные</li>
									<li className={styles.listItem}>Недорогие</li>
									<li className={styles.listItem}>1-комнатные</li>
									<li className={styles.listItem}>2-комнатные</li>
									<li className={styles.listItem}>Недорогие</li>
									<li className={styles.listItem}>1-комнатные</li>
									<li className={styles.listItem}>2-комнатные</li>
									<li className={styles.listItem}>Недорогие</li>
									<li className={styles.listItem}>1-комнатные</li>
									<li className={styles.listItem}>2-комнатные</li>
									<li className={styles.listItem}>Недорогие</li>
									<li className={styles.listItem}>1-комнатные</li>
									<li className={styles.listItem}>2-комнатные</li>
									<li className={styles.listItem}>Недорогие</li>
									<li className={styles.listItem}>1-комнатные</li>
									<li className={styles.listItem}>2-комнатные</li>
									<li className={styles.listItem}>Недорогие</li>
									<li className={styles.listItem}>1-комнатные</li>
									<li className={styles.listItem}>2-комнатные</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	export default FlatsPageRecommendation;