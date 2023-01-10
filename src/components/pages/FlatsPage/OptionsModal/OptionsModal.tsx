
	import styles from './OptionsModal.module.scss';
	
	import { useAppSelector } from '../../../../hook/redux';
	import { useState } from 'react';

	const OptionsModal = () => {

		const {loading, error, flats} = useAppSelector(state => state.flats);
		const [value, setValue] = useState('');

		const numberOfPeople = flats.map((person, index) => {
			return <option className={styles.option} key={index}>{person.numberOfPeople}</option>;
		});

		const district =  flats.map((districtItem, index) => {
			return <option className={styles.option} key={index}>{districtItem.district}</option>;
		});

		const metro =  flats.map((metro, index) => {
			return <option className={styles.option} key={index}>{metro.metro}</option>;
		});

		const additionally = flats.map((item, index) => {
			return <li key={index} className={styles.itemList}>
						<input className={styles.inputCheckbox} id={String(index + 'checkbox')} type="checkbox" name='list'/>
						<label htmlFor={String(index + 'checkbox')}>{item.additionally}</label>
					 </li>
			
		});

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.selectWrapper}>
						<div className={styles.selectItem}>
							<div className={styles.title}>Спальные места</div>
							<select className={styles.select} value={value} onChange={(event) => setValue(event.target.value)}>
								<option className={styles.option} >Выберите</option>
								{numberOfPeople}
							</select>
						</div>

						<div className={styles.selectItem}>
							<div className={styles.title}>Район</div>
							<select className={styles.select} value={value} onChange={(event) => setValue(event.target.value)}>
								<option className={styles.option} >Выберите</option>
								{district}
							</select>
						</div>
						
						<div className={styles.selectItem}>
							<div className={styles.title}>Метро</div>
							<select className={styles.select} value={value} onChange={(event) => setValue(event.target.value)}>
								<option className={styles.option} >Выберите</option>
								{metro}
							</select>
						</div>
					</div>
					<ul className={styles.checkboxList}>
						{additionally}
					</ul>
				</div>
			</>
		)
	}

	export default OptionsModal;