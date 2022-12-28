
	import styles from './CardMenuAuto.module.scss';
	import autoBg from '../../assets/img/mainPage/menuCard/autoBg.png';
	import {ReactComponent as Vector} from '../../assets/img/mainPage/menuCard/Vector.svg';
	/* import { useEffect, useState } from 'react'; */

	const CardMenuAuto = () => {
		/* const [state, setArrow] = useState(false); */
	
		
	/* 	useEffect(()=>{
			
		}, []) */

		/* const onHandleClick = () => {
			setArrow(true);
		} */

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>если срочно нужна машина</div>
					<div className={styles.title}>Авто на прокат</div>
					<Vector className={styles.vector}/*  onClick={onHandleClick} *//>
					<div className={styles.town}>Минск</div>
					<img className={styles.bg} src={autoBg} alt="flatsImage" />
				</div>
			</>
		)
	}

	export default CardMenuAuto;