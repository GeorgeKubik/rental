	import styles from './Description.module.scss';
	import imageDescr from '../../assets/img/Description/imageDescr.png';

	import NewsBlock from '../NewsBlock/index';

	const Description = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>ЧТО ТАКОЕ SDAEM.BY</div>
					<h2 className={styles.title}>Квартира на сутки в Минске</h2>
					<div className={styles.bloks}>
						<div className={styles.blockDescription}>
							
							<img className={styles.imageDescr} src={imageDescr} alt="pic" />
							<p className={styles.text}>
								<span className={styles.textBold}>Нужна квартира на сутки в Минске?</span>
								<br />
								На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <span className={styles.textBold}>более	500 квартир</span>. Благодаря удобной навигации вы быстро найдете подходящий вариант.
								<br />
								<br />
								В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
								с джакузи.
							</p>
							{/* <p className={styles.text}>
								
							</p> */}
							<p className={styles.text}>
								Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.
							</p>
						</div>
						<div className={styles.blockNews}>
							<NewsBlock/>
						</div>
					</div>
				</div>
			</>
		)
	}

	export default  Description;