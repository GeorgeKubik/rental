
	import styles from './Slider.module.scss';
	
	import FlatCard from '../FlatCard/index';
	import { useAppSelector } from '../../hook/redux';
	
	import Slider from "react-slick";
	

	const Carousel = () => {

		const {loading, error, flats} = useAppSelector(state => state.flats)

		return (
			<>
				<Slider>
					{
						flats.map(flat => <FlatCard key={flat.id} flats={flat}/>)
					}	
				</Slider>
			</>
		)
	}

	export default Carousel;