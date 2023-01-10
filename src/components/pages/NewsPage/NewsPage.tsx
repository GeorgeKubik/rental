
	import styles from './NewsPage.module.scss';
	import NewsList from '../../NewsList/index';
	import { ReactComponent as IconHous} from '../../../assets/img/newsPage/hous.svg';
	import { ReactComponent as SearchIcon} from '../../../assets/img/newsPage/searchIcon.svg';

	const NewsPage = () => {
		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.subtitle}>
						<div><IconHous/></div>
						<div className={styles.subtitleText}>Новости</div>
					</div>
					<div className={styles.search}>
						<div className={styles.title}>Новости</div>
						<input className={styles.input} placeholder='Поиск по статьям ' type="text" />
						<SearchIcon className={styles.searchIcon}/>
					</div>
					<ul className={styles.news}>
						<NewsList />
					</ul>
				</div>
			</>
		)
	}
	export default NewsPage;