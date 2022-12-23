
	import styles from './CardsMenu.module.scss';
	import CardMenuFlat from '../CardMenuFlat/index';
	import CardMenuHouse from '../CardMenuHouse/index';

	const CardsMenu = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<CardMenuFlat/>
					<CardMenuHouse/>
					<div className={styles.house}>Коттеджи и усадьбы</div>
					<div className={styles.list}>
						<ul>
							<li>Квартиры</li>
							<li>Коттеджи и усадьбы</li>
							<li>Популярные направления</li>
						</ul>
					</div>
					<div className={styles.both}>Бани и сауны</div>
					<div className={styles.auto}>Авто на прокат</div>
				</div>
			</>
		)
	}

	export default CardsMenu;