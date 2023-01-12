
	import styles from './MainPage.module.scss';
	import { useAppDispatch, useAppSelector } from '../../../hook/redux';
	import { useEffect, useState } from 'react';
	import {fetchData} from '../../../store/actions/flatsActions';
	import Filters from '../../Filters/index';
	import CardsMenu from '../../CardsMenu/index';
	import RentSection from '../../RentSection/index';
	import MapSearch from '../../MapSearch/index';
	import Description from '../../Description/index';
import Registration from '../../Registration';


	const MainPage = () => {
		/* const dispatch = useAppDispatch();
		const {error, loading, filters, flats} = useAppSelector(state => state.flats);
		
		const [state, setFilters] = useState(filters);
		
		useEffect(() => {
			dispatch(fetchData())
		}, [])
 */
		/* const onFilterSelect = () => {
			setFilters(state);
		} */
		return (
			<>
				<div className="container">
					<Registration/>
					<Filters /* filters={state} onFilterSelect={onFilterSelect} *//>
					<CardsMenu/>
					<RentSection />
					<MapSearch />
					<Description />
				</div>
			</>
		)
	}

	export default MainPage;