
	import styles from './FlatsPageFilter.module.scss';
	
	import SelectFlatsPageFilter from '../SelectFlatsPageFilter/index';
	import FlatsPageFilterPrice from '../FlatsPageFilterPrice/index';
	import FlatsPageAllOptions from '../FlatsPageAllOptions/index';
	import OptionsModal from '../OptionsModal/index';
	import ClearFilter from '../FlatsPageСlearFilter/index';
	import OpenObject from '../FlatsPageBtnOpenObject';
	
	import { useState } from 'react';




	const FlatsPageFilter = () => {

		const [openModal, setOpenModal] = useState(false);
		
		const onOpenModal = () => {
			setOpenModal(!openModal);
		}

		const modal = !openModal ? {'display': 'none'} : {'display': 'block'};

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<div className={styles.blocks}>
							<SelectFlatsPageFilter/>
							<FlatsPageFilterPrice/>
							<FlatsPageAllOptions onOpenModal={onOpenModal}/>
							<ClearFilter />
							<OpenObject />
						</div>
					</div>
					<div className={styles.modal} style={modal}>
						<div className={styles.container}>
							<OptionsModal/>
						</div>		
					</div>
				</div>
			</>
		)
	}

	export default FlatsPageFilter;