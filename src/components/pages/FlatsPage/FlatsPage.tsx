
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
			
			return (
				<div>
					<h1>Квартиры</h1>
					{
						flats.map(flat => <FlatCard key={flat.id} flats={flat}/>)
					}
				</div>
			)
		}
	
		export default FlatsPage;