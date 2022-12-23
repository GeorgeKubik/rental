
	import styles from './CardMenuFlat.module.scss';
	import flatsBg from '../../assets/img/mainPage/menuCard/flatsBg.png';
	import {ReactComponent as Vector} from '../../assets/img/mainPage/menuCard/Vector.svg';
	/* import { useEffect, useState } from 'react'; */

	const CardMenuFlat = () => {
		/* const [state, setArrow] = useState(false); */
	
		
	/* 	useEffect(()=>{
			
		}, []) */

		/* const onHandleClick = () => {
			setArrow(true);
		} */

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>снять квартиру</div>
					<div className={styles.title}>Квартиры на сутки</div>
					<Vector className={styles.vector}/*  onClick={onHandleClick} *//>
					<div className={styles.town}>Минск</div>
					<img className={styles.bg} src={flatsBg} alt="flatsImage" />
				</div>
			</>
		)
	}

	export default CardMenuFlat;