	import styles from './FlatCard.module.scss';
	import { IFlats } from '../../variables/variablesFlats';

	import {ReactComponent as User} from '../../assets/img/slider/user.svg';
	import {ReactComponent as IconCity} from '../../assets/img/header/icon_flat.svg';
	import {ReactComponent as Metro} from '../../assets/img/slider/metro.svg';
	import {ReactComponent as IconPhone} from '../../assets/img/slider/phone.svg';
	interface FlatCardProps {
		flats: IFlats
	}

 	export function FlatCard ({flats}: FlatCardProps) {
		return (
			<>
				<div className={styles.bloks}>
					<img className={styles.img} src={flats.img} alt="flats" />
					<div className={styles.blockInfo}>
						<div className={styles.price}>
							{flats.price} byn
							<br />
							<div className={styles.textPrice}>за сутки</div>
						</div>
						<div className={styles.numberOfPeople}><User/> {flats.numberOfPeople} (2 + 2)</div>
						<div className={styles.rooms}>{flats.rooms} комн.</div>
						<div className={styles.squareMeter}>{flats.squareMeter} м</div>
					</div>
					<div className={styles.streetBlock}>
						<div className={styles.city}><IconCity className={styles.iconCity}/>{flats.city},</div> 
						<div className={styles.street}>{flats.street}</div>
					</div>
					<div className={styles.blockMetro}>
						<div className={styles.metro}><Metro/> {flats.metro}</div>
						<div className={styles.district}>{flats.district}</div>
					</div>
					<div className={styles.descr}>{flats.descr}</div>
					<div className={styles.blockBottom}>
						<button className={styles.contact}><IconPhone className={styles.iconPhone}/>Контакты</button>
						<button className={styles.detail}>Подробнее</button>
					</div>
				</div>
			</>
		)
	}

