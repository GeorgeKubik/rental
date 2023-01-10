
	import styles from './SelectArea.module.scss';

	import { useState } from 'react';
	import { useAppSelector } from '../../hook/redux';

	const SelectArea = () => {
		const {error, loading, flats} = useAppSelector(state => state.flats);

		const [value, setValue] = useState('');

		const optionsArea = flats.map((text, index) => {
			return <option key={index}>{text.district}</option>;
		});

		return (
			<>
				<select className={styles.selectItem} value={value} onChange={(event) => setValue(event.target.value)}>
					<option>Район</option>
					{optionsArea}
				</select>
			</>
		)
	}

	export default SelectArea;


