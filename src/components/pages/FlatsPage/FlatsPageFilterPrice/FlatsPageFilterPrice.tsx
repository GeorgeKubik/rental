
	import styles from './FlatsPageFilterPrice.module.scss';

	const FlatsPageFilterPrice = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.text}>Цена за сутки (BYN)</div>
					<input className={styles.input} type="number" placeholder='От'/>
					<input className={styles.input} type="number" placeholder='До'/>
				</div>
			</>
		)
	}

	export default FlatsPageFilterPrice;