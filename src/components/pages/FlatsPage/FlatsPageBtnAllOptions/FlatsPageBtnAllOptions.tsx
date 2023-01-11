
	import styles from './FlatsPageBtnAllOptions.module.scss';
	import {ReactComponent as IconOptions} from '../../../../assets/img/flatsPageFilters/options.svg';

	interface Modal {
		onOpenModal: () => void;
	}

	const FlatsPageBtnAllOptions = ({onOpenModal}:Modal) => {

		return (
			<>
				<div className={styles.wrapper}>
					<button onClick={onOpenModal} className={styles.btnOptions}>
						Больше опций
						<IconOptions className={styles.iconOptions}/>
					</button>
				</div>
			</>
		)
	}

	export default FlatsPageBtnAllOptions;

