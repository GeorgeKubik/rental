	import styles from './Filter.module.scss';

	const Filter = () => {
		const buttonsData = [
			{name: 'flats', lable: 'Квартиры на сутки'},
			{name: 'house', lable: 'Коттеджи и усадьбы'},
			{name: 'bath', lable: 'Бани и сауны'},
			{name: 'auto', lable: 'Авто напрокат'}
		];

		const buttons = buttonsData.map(({name, lable}) => {
			/* const active = filter === name; */
			/* const clazz = active ? {styles.btnLight} : styles.{btnOutlineLight}; */
			return (
				<button
					/* className={`btn ${clazz}`}
					type="button"
						key={name}
						onClick={() => onFilterSelect(name)} */>
						{lable}
				</button>
			)
		})

		return (
			<div className="btn-group">
				{buttons} 
			</div>
		);
	}
	export default Filter;