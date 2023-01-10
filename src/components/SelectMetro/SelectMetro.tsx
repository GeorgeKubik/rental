
	import styles from './SelectMetro.module.scss';

	import { useState } from 'react';
	import { useAppSelector } from '../../hook/redux';

	const SelectMetro = () => {
		const {error, loading, flats} = useAppSelector(state => state.flats);

		const [value, setValue] = useState('');

		const optionsMetro = flats.map((text, index) => {
			return <option key={index}>{text.metro}</option>;
		});

		return (
			<>
				<select className={styles.selectItem} value={value} onChange={(event) => setValue(event.target.value)}>
					<option>Метро</option>
					{optionsMetro}
				</select>
			</>
		)
	}

	export default SelectMetro;


