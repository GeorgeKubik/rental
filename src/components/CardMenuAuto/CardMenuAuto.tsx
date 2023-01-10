
	import styles from './CardMenuAuto.module.scss';
	import autoBg from '../../assets/img/mainPage/menuCard/autoBg.png';
	import {ReactComponent as Vector} from '../../assets/img/mainPage/menuCard/Vector.svg';
/* 	import { useEffect, useState } from 'react';
	import { useAppSelector } from '../../hook/redux';
	import { Link } from 'react-router-dom'; */


	const CardMenuAuto = () => {
		/* const {error, loading, flats} = useAppSelector(state => state.flats);
		const [openCard, setOpenCard] = useState(false);


		const stylesVisible = openCard ? {'display': 'block'} : {'display': 'none'};
		const turnArrow = openCard ? {'transform': 'rotateY(180deg)'} : {'transform': 'rotateY(0)'};

		const onHandleClick = () => {
			setOpenCard(!openCard);
		}

		const getCity = flats.map((city, index) => {
				return (
					<Link to='/flats' key={index} style={stylesVisible} className={styles.townItem}> 
						<li>
							{city.city}
						</li>
					</Link>
				)
		}) */

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>если срочно нужна машина</div>
					<div className={styles.title}>Авто на прокат</div>
					<button /* onClick={onHandleClick} */><Vector /* style={turnArrow} */ className={styles.vector}/></button>
					<div className={styles.town}>{/* {getCity} */}Минск</div>
					<img className={styles.bg} src={autoBg} alt="flatsImage" />
				</div>
			</>
		)
	}

	export default CardMenuAuto;