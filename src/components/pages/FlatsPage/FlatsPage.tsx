	import styles from './FlatsPage.module.scss';

	import ApartmentPagination from './ApartmentPagination/index';
	import FlatsPageRecommendation from './FlatsPageRecommendation/index';
	import FlatsPageFilter from './FlatsPageFilter/index';

		const FlatsPage = () => {

			return (
				<div>
					<FlatsPageRecommendation/>
					<FlatsPageFilter/>
					<ApartmentPagination />
				</div>
			)
		}
	
		export default FlatsPage;

