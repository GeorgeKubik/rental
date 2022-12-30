
	import styles from './Carousel.module.scss';

	import FlatCard from '../FlatCard/index';
	import { useAppSelector } from '../../hook/redux';
	import 'pure-react-carousel/dist/react-carousel.es.css';
	import { CarouselProvider, Slider,Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
	
	import {ReactComponent as Next} from '../../assets/img/slider/next.svg';
	import {ReactComponent as Prev} from '../../assets/img/slider/prev.svg';

	const Carousel = () => {
		const {loading, error, flats} = useAppSelector(state => state.flats)
		const slide =  flats.map((flat, i) => <div key={i}><Slide index={i}><FlatCard key={flat.id} flats={flat}/></Slide></div>)
		
		return (
			<>
				<CarouselProvider 
					naturalSlideWidth={90}
					naturalSlideHeight={125}
					totalSlides={6}
					visibleSlides={3}
					infinite={true}
					className={styles.slider}
				>
					<Slider>
						{slide}
					</Slider>
					<ButtonBack><Prev className={styles.prev}/></ButtonBack>
					<ButtonNext><Next className={styles.next}/></ButtonNext>
				</CarouselProvider>
			</>
		)
	}

	export default Carousel;