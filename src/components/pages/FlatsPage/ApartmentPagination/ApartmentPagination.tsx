	import styles from './ApartmentPagination.module.scss';
	
	import FlatCard from '../../../FlatCard/index';
	/* import ReactPaginate from "react-paginate"; */
	/* import {ReactComponent as IconSelect} from '../../../../assets/img/flatsPageFilters/iconSelect.svg'; */
	/* import { IPaginationProps } from '../../../../variables/variablesFlats'; */
	import { useAppSelector } from '../../../../hook/redux';
	import { useState } from 'react';
	import {ReactComponent as IconList} from '../../../../assets/img/flatsPageFilters/IconList.svg';
	import {ReactComponent as IconTile} from '../../../../assets/img/flatsPageFilters/IconTile.svg';
	import {ReactComponent as IconMap} from '../../../../assets/img/header/icon_map.svg';

	import {ReactComponent as VK} from '../../../../assets/img/socialIconFlatsPage/vk.svg';
	import {ReactComponent as FaceBook} from '../../../../assets/img/socialIconFlatsPage/fb.svg';
	import {ReactComponent as Viber} from '../../../../assets/img/socialIconFlatsPage/viber.svg';
	import {ReactComponent as Telegram} from '../../../../assets/img/socialIconFlatsPage/telegram.svg';
	import {ReactComponent as WhatsApp} from '../../../../assets/img/socialIconFlatsPage/whatsapp.svg';
	
	export interface IPaginationProps {
		className?: string;
		initialPage?: number;
		marginPagesDisplayed?: number;
		pagesCount: number;
		pageRangeDisplayed?: number;
		onChange: ({ selected }: { selected: number }) => void;
	 }
	 
	const ApartmentPagination = () => {
		const {error, loading, flats} = useAppSelector(state => state.flats);
		const flatsCard = flats.map(flat => <FlatCard key={flat.id} flats={flat}/>)

		const options:string[] = ['По умолчанию', 'Комнат', 'Дешевле', 'Дороже'];
		const [option, setOptions] = useState('');
		
		const valueOptions = options.map((item:string, index:number) => <option key={index}>{item}</option>);

		return (
			<>
				<div className={styles.wrapperCards}>
					<div className={styles.container}>
						<div className={styles.wrapperOptions}>
							<select className={styles.select} value={option} onChange={(event) => setOptions(event.target.value)}>
								{valueOptions}
							</select>
							<div className={styles.btnWrapper}>
								<button className={styles.cardChangeButton}>
									<IconList className={styles.icon}/>
									<div>Список</div>
								</button>
								<button className={styles.cardChangeButton}>
									<IconTile className={styles.icon}/>
									<div>Плитки</div>
								</button>
								<button className={styles.btnMap}>
									<IconMap className={styles.iconMap}/>
									<div>Показать на карте</div>
								</button>
							</div>
						</div>
						<h2>Найдено {flats.length} результата</h2>
						<div className={styles.flatsBlock}>
							{flatsCard}
						{/* 	<ReactPaginate
								initialPage={initialPage}
								marginPagesDisplayed={marginPagesDisplayed}
								pageCount={pagesCount}
								pageRangeDisplayed={pageRangeDisplayed}
								onPageChange={onChange}
								containerClassName={classNames("Pagination", className)}
								activeClassName="Pagination__active"
								pageLinkClassName="Pagination__page-link"
								breakLinkClassName="Pagination__page-link"
								nextLinkClassName="Pagination__page-link"
								previousLinkClassName="Pagination__page-link"
								pageClassName="Pagination__page-item"
								breakClassName="Pagination__page-item"
								nextClassName="Pagination__page-item"
								previousClassName="Pagination__page-item"
							/> */}
						</div>
						<div className={styles.blockFooterApartment}>
							<div>1 2 3 4 5</div>
							<div className={styles.social}>
								<div className={styles.socialText}>Поделиться</div>
								<div className={styles.socialItem}><VK/></div>
								<div className={styles.socialItem}><FaceBook/></div>
								<div className={styles.socialItem}><Viber/></div>
								<div className={styles.socialItem}><Telegram/></div>
								<div className={styles.socialItem}><WhatsApp/></div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	} 

	export default ApartmentPagination;