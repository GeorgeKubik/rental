import styles from './Footer.module.scss';

import logo from '../../assets/img/header/logo.png';
import visa from '../../assets/img/webPay/visa.png';
import webPay from '../../assets/img/webPay/webPay.png';
import verifiedVisa from '../../assets/img/webPay/verifiedByVisa.png';
import masterCard from '../../assets/img/webPay/masterCard.png';
import masterCardSecure from '../../assets/img/webPay/masterCardSecureCode.png';
import belCard from '../../assets/img/webPay/belCard.png';

/* import SocialMedia from '../SocialMedia/index'; */

const Footer = (/* {socialIcons} */) => {
	
	/* const socialIcon = socialIcons.map(icons => {
		const {id, ...icon} = icons;
		return (
			<SocialMedia key={id} {...icon}/>
		)
	}) */
	return (
		<div>
			<footer className={styles.footer}>
				<div className={styles.info}>
					<img className={styles.logo} src={logo} alt="logo" />
					<div className={styles.textLogo}>сдаём бай</div>
					<div className={styles.infoOrganization}>
						ИП Шушкевич Андрей Викторович 
						<br/>
						УНП 192602485 Минским горисполкомом
						<br/>
						10.02.2016
						<br/>
						220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
						<br/>
						+375 29 621 48 33, sdaem@sdaem.by
						<br/>
						Режим работы: 08:00-22:00
					</div>
				</div>	
				<ul className={styles.footerMenu}>
					<li>Коттеджи и усадьбы</li>
					<li>Бани и сауны</li>
					<li>Авто на прокат</li>
					<li>
						<div className={styles.footerBlocks}>
							<div className={styles.footerSocial}>
								<div className={styles.footerSocialText}>
									Мы в соцсетях
								</div>
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.8056 9.90907C12.4804 9.90907 9.79677 12.5927 9.79677 15.9179C9.79677 19.2431 12.4804 21.9267 15.8056 21.9267C19.1308 21.9267 21.8143 19.2431 21.8143 15.9179C21.8143 12.5927 19.1308 9.90907 15.8056 9.90907ZM15.8056 19.8231C13.6552 19.8231 11.9003 18.0683 11.9003 15.9179C11.9003 13.7675 13.6552 12.0126 15.8056 12.0126C17.9559 12.0126 19.7108 13.7675 19.7108 15.9179C19.7108 18.0683 17.9559 19.8231 15.8056 19.8231ZM22.0604 8.26259C21.2841 8.26259 20.6571 8.88954 20.6571 9.66591C20.6571 10.4423 21.2841 11.0692 22.0604 11.0692C22.8368 11.0692 23.4638 10.4452 23.4638 9.66591C23.464 9.48156 23.4279 9.29897 23.3574 9.12861C23.287 8.95825 23.1836 8.80345 23.0533 8.6731C22.9229 8.54274 22.7681 8.43938 22.5977 8.36894C22.4274 8.2985 22.2448 8.26236 22.0604 8.26259ZM27.5184 15.9179C27.5184 14.3007 27.5331 12.6981 27.4423 11.0839C27.3515 9.20888 26.9237 7.54482 25.5526 6.17372C24.1786 4.7997 22.5175 4.37489 20.6425 4.28407C19.0253 4.19325 17.4227 4.2079 15.8085 4.2079C14.1913 4.2079 12.5888 4.19325 10.9745 4.28407C9.0995 4.37489 7.43544 4.80263 6.06435 6.17372C4.69032 7.54775 4.26552 9.20888 4.1747 11.0839C4.08388 12.7011 4.09853 14.3036 4.09853 15.9179C4.09853 17.5321 4.08388 19.1376 4.1747 20.7519C4.26552 22.6269 4.69325 24.2909 6.06435 25.662C7.43837 27.036 9.0995 27.4608 10.9745 27.5517C12.5917 27.6425 14.1942 27.6278 15.8085 27.6278C17.4257 27.6278 19.0282 27.6425 20.6425 27.5517C22.5175 27.4608 24.1815 27.0331 25.5526 25.662C26.9267 24.288 27.3515 22.6269 27.4423 20.7519C27.536 19.1376 27.5184 17.5351 27.5184 15.9179ZM24.9403 22.8261C24.7265 23.3593 24.4686 23.7577 24.0556 24.1679C23.6425 24.581 23.247 24.8388 22.7138 25.0526C21.1727 25.6649 17.5136 25.5272 15.8056 25.5272C14.0975 25.5272 10.4354 25.6649 8.89443 25.0556C8.36122 24.8417 7.96279 24.5839 7.55263 24.1708C7.13954 23.7577 6.88173 23.3622 6.66786 22.829C6.05849 21.2851 6.19618 17.6259 6.19618 15.9179C6.19618 14.2099 6.05849 10.5477 6.66786 9.00673C6.88173 8.47353 7.13954 8.07509 7.55263 7.66493C7.96571 7.25478 8.36122 6.99404 8.89443 6.78017C10.4354 6.17079 14.0975 6.30849 15.8056 6.30849C17.5136 6.30849 21.1757 6.17079 22.7167 6.78017C23.2499 6.99404 23.6483 7.25185 24.0585 7.66493C24.4716 8.07802 24.7294 8.47353 24.9433 9.00673C25.5526 10.5477 25.4149 14.2099 25.4149 15.9179C25.4149 17.6259 25.5526 21.2851 24.9403 22.8261Z" fill="#1E2123"/>
								</svg>
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M27.2554 9.61604C27.4231 9.06908 27.2554 8.66797 26.4625 8.66797H23.836C23.1676 8.66797 22.8622 9.01497 22.6946 9.39608C22.6946 9.39608 21.3591 12.5944 19.4668 14.6681C18.8559 15.2716 18.5769 15.4621 18.2439 15.4621C18.0774 15.4621 17.8355 15.2716 17.8355 14.7246V9.61604C17.8355 8.95968 17.6427 8.66797 17.0857 8.66797H12.9585C12.5417 8.66797 12.2902 8.97145 12.2902 9.26081C12.2902 9.88188 13.2363 10.0254 13.3333 11.7757V15.5727C13.3333 16.4043 13.1812 16.5561 12.8459 16.5561C11.956 16.5561 9.79056 13.346 8.50543 9.67133C8.25511 8.95733 8.0024 8.66915 7.33169 8.66915H4.70633C3.95538 8.66915 3.80566 9.01615 3.80566 9.39726C3.80566 10.0818 4.69555 13.4695 7.9509 17.9499C10.1211 21.0094 13.1765 22.668 15.9599 22.668C17.6283 22.668 17.8343 22.2998 17.8343 21.6646V19.3521C17.8343 18.6157 17.9936 18.4675 18.5218 18.4675C18.9098 18.4675 19.5781 18.6604 21.1364 20.1343C22.9161 21.8822 23.2108 22.6668 24.2108 22.6668H26.8362C27.586 22.6668 27.9608 22.2986 27.7452 21.5717C27.5093 20.8483 26.6589 19.7955 25.5307 18.5498C24.9175 17.8394 24.0012 17.0748 23.7222 16.6925C23.3329 16.1996 23.4455 15.982 23.7222 15.5445C23.7234 15.5456 26.9224 11.1205 27.2554 9.61604Z" fill="#1E2123"/>
								</svg>
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.8047 5.66797C10.2827 5.66797 5.80566 10.145 5.80566 15.667C5.80566 20.657 9.46166 24.793 14.2427 25.546V18.558H11.7027V15.667H14.2427V13.464C14.2427 10.956 15.7357 9.57297 18.0187 9.57297C19.1127 9.57297 20.2587 9.76797 20.2587 9.76797V12.227H18.9947C17.7547 12.227 17.3667 12.999 17.3667 13.79V15.665H20.1377L19.6947 18.556H17.3667V25.544C22.1477 24.795 25.8037 20.658 25.8037 15.667C25.8037 10.145 21.3267 5.66797 15.8047 5.66797Z" fill="#1E2123"/>
								</svg>
							</div>
							<div className={styles.footerPay}>
								<img className={styles.visa} src={visa} alt="pay" />
								<img className={styles.webPay} src={webPay} alt="pay" />
								<img className={styles.verifiedVisa} src={verifiedVisa} alt="pay" />
								<img className={styles.masterCard} src={masterCard} alt="pay" />
								<img className={styles.masterCardSecure} src={masterCardSecure} alt="pay" />
								<img className={styles.belCard} src={belCard} alt="pay" />
							</div>
						</div>
					</li>
				</ul>
				<ul className={styles.flats}>
					<ul className={styles.flatsList}>
						<li>Квартиры</li>
					</ul>
					<ul className={styles.flatsList}>
						<li>Квартиры в Минске</li>
						<li>Квартиры в Гомеле</li>
						<li>Квартиры в Бресте</li>
					</ul>
					<ul className={styles.flatsList}>
						<li>Квартиры в Витебске</li>
						<li>Квартиры в Гродно</li>
						<li>Квартиры в Могилеве</li>
					</ul>
				</ul>
				<ul className={styles.news}>
					<li className={styles.newsTitle}>Новости</li>
					<ul className={styles.newsList}>
						<li>Размещение и тарифы </li>
						<li>Объявления на карте</li>
						<li>Контакты</li>
					</ul>
				</ul>
			</footer>
		</div>
	)
}

export default Footer;

