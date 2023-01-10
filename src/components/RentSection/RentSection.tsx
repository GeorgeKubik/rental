import styles from './RentSection.module.scss';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { useEffect} from 'react';
import { fetchData } from '../../store/actions/flatsActions';
import Carousel from '../Carousel/index';
import SelectMetro from '../SelectMetro';
import SelectArea from '../SelectArea';
/* import {ReactComponent as Metro} from '../../assets/img/slider/metro.svg'; */

const RentSection = () => {
	const dispatch = useAppDispatch();
	const {error, loading, filters, flats} = useAppSelector(state => state.flats);
	useEffect(() => {
		dispatch(fetchData())
	}, [])

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.subTitle}>
						квартиры на сутки 
					</div>
					<div className={styles.sectionHeader}>
						<div className={styles.title}>
							Аренда квартир в Минске
						</div>
					<div className={styles.select}>
						<div className={styles.selectMetro}>
							<SelectMetro/>
						</div>
						<div className={styles.selectArea}>
							<SelectArea/>
						</div>
						{/* <select className={styles.selectItem} name="select" id="select">
							<option selected>Метро</option>
							<option>asdsadasd</option>
							<option></option>
							<option></option>
						</select>
						<select className={styles.selectItem} name="select" id="select">
							<option selected>Район</option>
							<option>dasdsadsad</option>
							<option></option>
							<option></option>
						</select> */}
					</div>
					</div>
					<div className={styles.sliderBlock}>
						<Carousel/>
					</div>
					<div className={styles.sectionFooter}>
						<div>
							<div className={styles.offer}>341 <span className={styles.plus}>+</span></div>	
							<div className={styles.text}>Предложений по Минску</div>
						</div>
						<div>
							<button className={styles.btn}>Посмотреть все</button>
						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}

export default RentSection;