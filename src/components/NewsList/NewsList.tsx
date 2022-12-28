
	import styles from './NewsList.module.scss';

	const NewsList = () => {

		const news = [
			{
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '14 января',
				id: 1
			},
			{
				title: 'Аренда квартиры посуточно',
				data: '14 января',
				id: 2
			},
			{
				title: 'Дворцово-парковый комплекс Чапских',
				data: '13 января',
				id: 3
			},
			{
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '13 января',
				id: 4
			},
			{
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '12 января',
				id: 5
			},
			{
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '11 января',
				id: 6
			},
			{
				title: 'Линия Сталина: суровый отдых в усадьбах  на сутки',
				data: '11 января',
				id: 7
			}
		]


		return (
			<>
				{
					news.map(newItem => {
						return (
							<li className={styles.listItem} key={newItem.id}>
								<h2 className={styles.title}>{newItem.title}</h2>
								<div className={styles.data}>{newItem.data}</div>
							</li>
						)
					})
				}
			</>
		)
	}

	export default NewsList;