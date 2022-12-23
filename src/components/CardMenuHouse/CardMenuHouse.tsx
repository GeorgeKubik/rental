
	import styles from './CardMenuHouse.module.scss';
	import houseBg from '../../assets/img/mainPage/menuCard/houseBg.png';
	import {ReactComponent as Vector} from '../../assets/img/mainPage/menuCard/Vector.svg';
	/* import { useEffect, useState } from 'react'; */

	const CardMenuHouse = () => {
		/* const [state, setArrow] = useState(false); */
	
		
	/* 	useEffect(()=>{
			
		}, []) */

		/* const onHandleClick = () => {
			setArrow(true);
		} */

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>снять коттедж на праздник</div>
					<div className={styles.title}>Коттеджи и усадьбы</div>
					<Vector className={styles.vector}/*  onClick={onHandleClick} *//>
					<div className={styles.town}>Минск</div>
					<img className={styles.bg} src={houseBg} alt="HouseImage" />
				</div>
			</>
		)
	}

	export default CardMenuHouse;