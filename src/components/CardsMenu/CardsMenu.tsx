
	import styles from './CardsMenu.module.scss';
	import CardMenuFlat from '../CardMenuFlat/index';
	import CardMenuHouse from '../CardMenuHouse/index';
	import CardMenuBoth from '../CardMenuBoth/index';
	import CardMenuAuto from '../CardMenuAuto/index';

	const CardsMenu = () => {
		return (
			<>
				<div className={styles.wrapper}>
				
					<div className={styles.upCards}>
						<CardMenuFlat/>
						<CardMenuHouse/>
					</div>
					<div className={styles.bottomCards}>
						<CardMenuBoth/>
						<CardMenuAuto/>
					</div>
					<ul className={styles.list}>
						<li>Квартиры</li>
						<li>Коттеджи и усадьбы</li>
						<li>Популярные направления</li>
					</ul>
				</div>
			</>
		)
	}

	export default CardsMenu;