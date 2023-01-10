
	import styles from './ContactCard.module.scss';

	import {ReactComponent as Telegram} from '../../assets/img/contactCard/telegram.svg';
	import {ReactComponent as WhatsApp} from '../../assets/img/contactCard/whatsApp.svg';
	import {ReactComponent as Email} from '../../assets/img/contactCard/email.svg';
	import user from '../../assets/img/contactCard/user.jpeg';
	const ContactCard = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<img src={user} className={styles.imagePhoto} alt="photo" />
					<div className={styles.status}>Владелец</div>
					<div className={styles.name}>Дмитрий</div>
					<div className={styles.phone}>+375 (29) 291-14-44</div>
					<div className={styles.emailAddress}>vladimir6234@tut.by</div>
					<div className={styles.socialBlock}>
						<div className={styles.socialLink}><Telegram /></div>
						<div className={styles.socialLink}><WhatsApp /></div>
						<div className={styles.socialLink}><Email /></div>
					</div>
				</div>
			</>
		)
	}

	export default ContactCard;