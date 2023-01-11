
	import styles from './FlatsPageSearchMap.module.scss';

	import {ReactComponent as IconMap} from '../../../../assets/img/header/icon_map.svg';

	const SearchMap = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.mainContent}>
							<h2 className={styles.title}>Показать найденные квартиры на карте</h2>
							<div className={styles.descr}>
								Ищите новостройки рядом с работой, 
								<br />
								парком или родственниками
							</div>
							<button className={`${styles.btn} ${styles.btnSearch}`}>
								<IconMap className={styles.iconMap}/>Открыть карту
							</button>
						</div>
					
					</div>
				</div>
			</>
		)
	}

	export default SearchMap;