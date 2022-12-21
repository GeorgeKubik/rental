
	import styles from './MainPage.module.scss';
	import backgroundImage from '../../../assets/img/mainPage/bg_mainPage.png';

	const MainWindow = () => {
		return (
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Sdaem.by - у нас живут <span className={styles.titleTextYellow}>ваши объявления</span></h1>
				<img className={styles.bgImage} src={backgroundImage} alt="bgImage" />
			</div>
		)
	}

	export default MainWindow;