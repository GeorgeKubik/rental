
	import styles from './MainPage.module.scss';
	import { useAppDispatch, useAppSelector } from '../../../hook/redux';
	import { useEffect } from 'react';
	import {fetchData} from '../../../store/actions/flatsActions';
	import Filters from '../../Filters/index';
	import CardsMenu from '../../CardsMenu/index';
	

	const MainPage = () => {
		const dispatch = useAppDispatch();
		const {error, loading, filters} = useAppSelector(state => state.flats);

		useEffect(() => {
			dispatch(fetchData())
		}, [])

		return (
			<>
				<Filters />
				<CardsMenu/>
			</>
		)
	}

	export default MainPage;