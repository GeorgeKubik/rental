	import styles from './ApartmentPagination.module.scss';
	
	import FlatCard from '../../../FlatCard';
	
	import { useAppSelector } from '../../../../hook/redux';
	import { useState } from 'react';
	import {ReactComponent as IconSelect} from '../../../../assets/img/flatsPageFilters/iconSelect.svg';
	import {ReactComponent as IconList} from '../../../../assets/img/flatsPageFilters/IconList.svg';
	import {ReactComponent as IconTile} from '../../../../assets/img/flatsPageFilters/IconTile.svg';
	import {ReactComponent as IconMap} from '../../../../assets/img/header/icon_map.svg';

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
						</div>
					</div>
				</div>
			</>
		)
	} 

	export default ApartmentPagination;