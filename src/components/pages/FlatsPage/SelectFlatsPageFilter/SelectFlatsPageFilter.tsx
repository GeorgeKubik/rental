import styles from './SelectFlatsPageFilter.module.scss';

import { useAppSelector } from '../../../../hook/redux';
import { useState } from 'react';


	const SelectFlatsPageFilter = () => {

		const {error, loading, flats} = useAppSelector(state => state.flats);
		const [value, setValue] = useState('Выберите');

		const rooms = flats.map((room, index) => {
			return <option key={index}>{room.rooms}</option>
		});

		return (
			<>
				<div className={styles.wrapper}>
					<p className={styles.subtitle}>
						Комнаты 
					</p>
					<div>
						<select className={styles.select} value={value} onChange={(event) => setValue(event.target.value)}>
							<option>Выберите</option>
							{
								rooms
							}
						</select>
					</div>
				</div>
			</>
		)
	}

	export default SelectFlatsPageFilter;