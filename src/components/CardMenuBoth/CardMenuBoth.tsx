
	import styles from './CardMenuBoth.module.scss';
	import bothBg from '../../assets/img/mainPage/menuCard/BothBg.png';
	import {ReactComponent as Vector} from '../../assets/img/mainPage/menuCard/Vector.svg';
	/* import { useEffect, useState } from 'react'; */

	const CardMenuBoth = () => {
		/* const [state, setArrow] = useState(false); */
	
		
	/* 	useEffect(()=>{
			
		}, []) */

		/* const onHandleClick = () => {
			setArrow(true);
		} */

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>попариться в бане с друзьями</div>
					<div className={styles.title}>Бани и сауны</div>
					<Vector className={styles.vector}/*  onClick={onHandleClick} *//>
					<div className={styles.town}>Минск</div>
					<img className={styles.bg} src={bothBg} alt="flatsImage" />
				</div>
			</>
		)
	}

	export default CardMenuBoth;