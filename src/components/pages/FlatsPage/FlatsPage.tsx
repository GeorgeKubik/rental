
		import styles from './FlatsPage.module.scss';
		import { useAppDispatch, useAppSelector } from '../../../hook/redux';
		import { useEffect } from 'react';
		import {fetchData} from '../../../store/actions/flatsActions';
		import FlatCard from '../../FlatCard/index';
		
	
		const FlatsPage = () => {
			const dispatch = useAppDispatch();
			const {error, loading, filters, flats} = useAppSelector(state => state.flats);
			
			useEffect(() => {
				dispatch(fetchData())
			}, [])
			const flatsInfo = flats.map(flat => <FlatCard key={flat.id} flats={flat}/>)
			return (
				<div>
					<div className={styles.wrapper}>
						<h1>Найдено number результата</h1>
						<div className={styles.flatsBlock}>
							{flatsInfo}
						</div>
					</div>
				</div>
			)
		}
	
		export default FlatsPage;