import styles from './Filters.module.scss';
import bgImage from '../../assets/img/mainPage/bg.png';

	const Filters = () => {
		const buttonsData = [
			{name: 'flats', lable: 'Квартиры на сутки'},
			{name: 'house', lable: 'Коттеджи и усадьбы'},
			{name: 'bath', lable: 'Бани и сауны'},
			{name: 'auto', lable: 'Авто напрокат'}
		];
		const buttons = buttonsData.map(({name, lable}) => {
			const active = name === 'house';
			const activeClass = active ? `${styles.btnLight}` : `${styles.btnOutlineLight}`;
			return (
				<button  
					className={`btn ${activeClass}`}
					type="button"
					key={name}
					/* onClick={() => onFilterSelect(name)} */>
					{lable}
				</button>
			)
		})
		return (
			<>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<div className={styles.btnGroup}>
							{buttons} 
						</div>
						<h1 className={styles.title}>Sdaem.by - у нас живут <span className={styles.titleTextYellow}>ваши объявления</span></h1>
						<img className={styles.bgImage} src={bgImage} alt="bgImage" />
					</div>
				</div>
			</>
		)
	}

	export default Filters;

