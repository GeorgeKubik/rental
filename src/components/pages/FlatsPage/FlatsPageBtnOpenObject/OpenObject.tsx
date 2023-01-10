	import styles from './OpenObject.module.scss';
	import {ReactComponent as IconChevron} from '../../../../assets/img/flatsPageFilters/chevronDown.svg';

	const OpenObject = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<button className={styles.btn}>
						<div className={styles.btnText}>Показать объекты</div>
						<IconChevron className={styles.arrow}/>
					</button>
				</div>
			</>
		)
	}

	export default OpenObject;