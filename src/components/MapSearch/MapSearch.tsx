import styles from './MapSearch.module.scss';

import {ReactComponent as IconMap} from '../../assets/img/header/icon_map.svg';
import handIcon from '../../assets/img/searchMap/hand.svg';
import listIcon from '../../assets/img/searchMap/list.svg';


const MapSearch = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.mainContent}>
						<h2 className={styles.title}>Поиск квартир на карте</h2>
						<div className={styles.descr}>
							Ищите квартиры на сутки в центре города, возле парка или в живописном районе
						</div>
						<button className={`${styles.btn} ${styles.btnSearch}`}><IconMap className={styles.iconMap}/> Открыть карту</button>
						<div className={styles.blocks}>
							<div className={styles.block}>
								<div className={styles.headerBlock}>
									<img src={handIcon} alt="icon" />
									<div className={styles.titleBlock}>
										Начните привлекать <br/> клиентов бесплатно!	
									</div>
								</div>
								<div className={styles.descrBlock}>
									Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span className={styles.boldText}>бесплатно создавать и публиковать</span> объявления на сайте.
								</div>
								<button className={`${styles.btn} ${styles.btnGold}`}>+  Разместить объявление</button>
							</div>
							<div className={styles.block}>
								<div className={styles.headerBlock}>
										<img src={listIcon} alt="icon" />
										<div className={styles.titleBlock}>
											Поднимайте <br/> объявления	
										</div>
								</div>
								<div className={styles.descrBlock}>
									Вы в любое время можете <span className={styles.boldText}>поднимать</span> объявления <span className={styles.boldText}>вверх первой страницы</span> каталога,
									они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.
								</div>
								<button className={`${styles.btn} ${styles.btnGold}`}>Узнать стоимость услуги</button>
							</div>
							<div className={styles.goldBlock}>
								<div className={styles.titleBlock}>
									Приоритет Gold 
								</div>
								<div className={styles.descrBlock}>
									Приоритетное размещение <span className={styles.boldText}>Gold</span> позволяет <span className={styles.boldText}>закрепить ваше объявление</span> в верхней части каталога!
									<br/>
									<br/>
									Gold объявления <span className={styles.boldText}>перемещаются каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.
								</div>
								<button className={`${styles.btn} ${styles.btnRadius}`}>Еще о тарифе Gold</button>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</>
	)
}

export default MapSearch; 