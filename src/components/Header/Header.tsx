	import styles from './Header.module.scss';

	
	import {ReactComponent as Heart} from '../../assets/img/header/heart.svg';
	import {ReactComponent as IconMap} from '../../assets/img/header/icon_map.svg';
	import {ReactComponent as IconFlat} from '../../assets/img/header/icon_flat.svg';
	import logo from '../../assets/img/header/logo.png';
	import { useAppSelector } from '../../hook/redux';
	import {Link} from 'react-router-dom';

	import Hamburger from '../Hamburger';
	import SelectMenuHeader from '../SelectMenuHeader/index';


	const Header = () => {
		
		const {error, loading, flats} = useAppSelector(state => state.flats);

		const listMenu = flats.map((city, index):any => 
			<Link className={styles.listMenuLink}  key={index} to='/flats'>
				<li className={styles.listMenu}> 
					Квартиры на сутки в {city.city}
				</li>
			</Link>);
		
		const menu:string[] = [
			"Квартиры на сутки",
			"Коттеджи и усадьбы",
			"Бани и Сауны",
			"Авто напрокат"
		]
		// const menuItem = menu.map((title, index) => 
		// index === 0 ? <ul 
		// 					key={index} 
		// 					className={`${styles.rentalMenuItem} ${styles.flat}`}
		// 				>
		// 					<Select menu={title} city={listMenu} />
		// 					<IconFlat className={styles.iconFlat} />
		// 				</ul>
	   //            :
		// 				<ul 
		// 					key={index} 
		// 					className={styles.rentalMenuItem}
		// 				>
		// 					<Select menu={title} city={listMenu}/>
		// 				</ul>
		// )
		const menuItem = menu.map((title, index) => { 
			if (index === 0 && title.includes('Квартиры')) {
				return <ul 
							key={index} 
							className={`${styles.rentalMenuItem} ${styles.flat}`}
						 >
							<SelectMenuHeader menu={title} city={listMenu} />
							<IconFlat className={styles.iconFlat} />
						 </ul>
			}
			/* if (title.includes('Коттеджи')) {
				return <ul 
							key={index} 
							className={styles.rentalMenuItem}
						 >
							<SelectMenuHeader menu={title} city={listMenu} />
						 </ul>
			}
			if (title.includes('Бани')) {
				return <ul 
							key={index} 
							className={styles.rentalMenuItem}
						 >
							<SelectMenuHeader menu={title} city={listMenu} />
						 </ul>
			}
			if (title.includes('Авто')) {
				return <ul 
							key={index} 
							className={styles.rentalMenuItem}
						 >
							<SelectMenuHeader menu={title} city={listMenu} />
						 </ul>
			} */
			// return <ul 
			// 			key={index} 
			// 			className={styles.rentalMenuItem}
			// 		 >
			// 			<SelectMenuHeader menu={title} city={listMenu}/>
			// 		 </ul>
		});
		
		return (
			<>
				<div className={styles.container}>
					<header className={styles.header}>
							<div>
								<nav className={styles.menu}>
									<Hamburger />
									<ul className={styles.menuBlock}>
										<li><Link to='/' className={styles.menuLink}>Главная</Link></li>
										<li><Link to='/News' className={styles.menuLink}>Новости</Link></li>
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
				</div>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.rentalWrapper}>
							<Link to="/" >
								<img src={logo} alt="logo" className={styles.logo} />
							</Link>
							<div className={styles.rentalMenu}>
								{menuItem}
							</div>
							<div className={styles.btnWrapper}>
								<button className={styles.btn}>+ Разместить объявление</button>
								<Hamburger />
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	export default Header;