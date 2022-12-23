	import styles from './Header.module.scss';

	import {Link} from 'react-router-dom';

	import {ReactComponent as Heart} from '../../assets/img/header/heart.svg';
	import {ReactComponent as IconMap} from '../../assets/img/header/icon_map.svg';
	import {ReactComponent as IconFlat} from '../../assets/img/header/icon_flat.svg';
	import logo from '../../assets/img/header/logo.png';

	import Hamburger from '../Hamburger';

	const Header = () => {
		return (
			<>
				<header className={styles.header}>
					<div>
						<nav className={styles.menu}>
							<Hamburger />
							<ul className={styles.menuBlock}>
								<li><a className={styles.menuLink} href="#">Главная</a></li>
								<li><a className={styles.menuLink} href="#">Новости</a></li>
								<li><a className={styles.menuLink} href="#">Размещение и тарифы</a></li>
								<li>
									<IconMap className={styles.iconMap}/>
									<a className={styles.menuLink} href="#">
										Объявления на карте
									</a>
								</li>
								<li><a className={styles.menuLink} href="#">Контакты</a></li>
							</ul>
						</nav>
					</div>
					<div className={styles.block}>
						<div className={styles.bookmarksBlock}>
							<a href="#"className={styles.bookmarks}>Закладки</a>
							<a href="#"><Heart className={styles.heart}/></a>
						</div>
						<a className={styles.registration} href="#">Вход и регистрация</a>
					</div>
				</header>
				<div className={styles.rentalWrapper}>
					<Link to="/" >
						<img src={logo} alt="logo" className={styles.logo} />
					</Link>
					<ul className={styles.rentalMenu}>
						<li>
							<Link to="/flats" className={`${styles.rentalMenuItem} ${styles.flat}`}>
								Квартиры на сутки
								<IconFlat className={styles.iconFlat}/>
							</Link>
							{/* <select name="select" id="select">
								<option value="1">1</option>
								<option selected value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select> */}
						</li>
						<li>
							<Link to="/house" className={styles.rentalMenuItem}>
								Коттеджи и усадьбы
							</Link>
						</li>
						<li>
							<Link to="/both" className={styles.rentalMenuItem}>
								Бани и Сауны
							</Link>
						</li>
						<li>
							<Link to="/auto" className={styles.rentalMenuItem}>
								Авто напрокат
							</Link>
						</li>
					</ul>
					<div className={styles.btnWrapper}>
						<button className={styles.btn}>+ Разместить объявление</button>
						<Hamburger />
					</div>
				</div>
			</>
		)
	}

	export default Header;