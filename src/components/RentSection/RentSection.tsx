import styles from './RentSection.module.scss';
import FlatCard from '../FlatCard/index';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { useEffect} from 'react';
import { fetchData } from '../../store/actions/flatsActions';
/* import {ReactComponent as Metro} from '../../assets/img/slider/metro.svg'; */

const RentSection = () => {
	const dispatch = useAppDispatch();
	const {error, loading, filters, flats} = useAppSelector(state => state.flats);
	
	


	useEffect(() => {
		dispatch(fetchData())
	}, [])

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.subTitle}>
					квартиры на сутки 
				</div>
				<div className={styles.sectionHeader}>
					<div className={styles.title}>
						Аренда квартир в Минске
					</div>
				<div className={styles.select}>
					<select name="select" id="select" defaultValue='метро'>
						<option>Метро</option>
						<option></option>
						<option></option>
					</select>
					<select name="select" id="select" defaultValue='район'>
						<option>Район</option>
						<option></option>
						<option></option>
					</select>
				</div>
				</div>
				<div className={styles.slider}>
					<div className={styles.slide}>
						{/* {
							flats.map(flat => <FlatCard key={flat.id} flats={flat}/>)
						} */}
					</div>
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
		</>
	)
}

export default RentSection;