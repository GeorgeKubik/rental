
	import styles from './CardMenuFlat.module.scss';
	import flatsBg from '../../assets/img/mainPage/menuCard/flatsBg.png';
	import {ReactComponent as Vector} from '../../assets/img/mainPage/menuCard/Vector.svg';
	import { useEffect, useState } from 'react';
	import { useAppSelector } from '../../hook/redux';
	import { Link } from 'react-router-dom';

	const CardMenuFlat = () => {

		const {error, loading, flats} = useAppSelector(state => state.flats);
		const [openCard, setOpenCard] = useState(false);


		const visible = openCard ? {'display': 'block'} : {'display': 'none'};
		const turnArrow = openCard ? {'transform': 'rotateY(180deg)'} : {'transform': 'rotateY(0)'};
		
		const onHandleClick = () => {
			setOpenCard(!openCard);
		}

		const getCity = flats.map((city, index) => {
				return (
					<Link to='/flats' key={index} style={visible} className={styles.townItem}> 
						<li>
							{city.city}
						</li>
					</Link>
				)
		})

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>снять квартиру</div>
					<div className={styles.title}>Квартиры на сутки</div>
					<button onClick={onHandleClick}><Vector style={turnArrow} className={styles.vector}/></button>
					<ul className={styles.town}>{getCity}</ul>
					<img className={styles.bg} src={flatsBg} alt="flatsImage" />
				</div>
			</>
		)
	}

	export default CardMenuFlat;