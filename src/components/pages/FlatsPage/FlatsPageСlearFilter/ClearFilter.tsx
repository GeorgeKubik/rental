
	import styles from './ClearFilter.module.scss';

	const ClearFilter = () => {

		const onClear = () => {
			console.log("очистить");
		}
		
		
		return (
			<>
				<div className={styles.wrapper}>
					<button onClick={onClear} className={styles.btnClear}>Очистить</button>
				</div>
			</>
		)
	}

	export default ClearFilter;