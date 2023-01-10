
	import styles from './NewsList.module.scss';
	import NewsBlock from '../NewsBlock/index';
	import { INews } from '../../variables/variablesFlats';
	
	
	const NewsList = () => {

		const news:INews[] = [
			{
				img: 'image',
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '14 января',
				id: 1
			},
			{
				img: 'image',
				title: 'Аренда квартиры посуточно',
				data: '14 января',
				id: 2
			},
			{
				img: 'image',
				title: 'Дворцово-парковый комплекс Чапских',
				data: '13 января',
				id: 3
			},
			{
				img: 'image',
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '13 января',
				id: 4
			},
			{
				img: 'image',
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '12 января',
				id: 5
			},
			{
				img: 'image',
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '11 января',
				id: 6
			},
			{
				img: 'image',
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '11 января',
				id: 7
			}
		]


		return (
			<>
				{/* <NewsBlock newsList = {news} /> */}
				{
					news.map(news => {
						return (
							<li key={news.id} className={styles.listItem}>
								<h2 className={styles.title}>{news.title}</h2>
								<div className={styles.data}>{news.data}</div>
							</li>
						)
					})
				}
			</>
		)
	}

	export default NewsList;