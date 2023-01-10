
	import styles from './FlatsPageAllOptions.module.scss';
	import {ReactComponent as IconOptions} from '../../../../assets/img/flatsPageFilters/options.svg';
	import { useState } from 'react';

	interface Modal {
		onOpenModal: () => void;
	}

	const FlatsPageAllOptions = ({onOpenModal}:Modal) => {

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

	export default FlatsPageAllOptions;

