import { useEffect, useContext } from 'react';
import Header from '../../modules/Navigation/Header';
import Navbar from '../../modules/Navigation/Navbar';
import classes from './../../style.module.scss';
import ContextData from './../../context/Data/ContextData';
import NewsItem from './modules/NewsItem';

const News = () => {

	const { stateData, dispatchData } = useContext(ContextData);
	const { news } = stateData;

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch("http://127.0.0.1:3004/news")
				if (response.status === 200){
					const result = await  response.json();
					dispatchData({
						type: "FETCH_NEWS",
						payload: result
					});
				}
			}catch (e){
				console.log(e);
			} 
		}
		fetchNews();
	}, [dispatchData]);

	return (
		<div className={classes.main}>
			<div className={classes.main__navigation}>
				<Navbar />
			</div>
			<div className={classes.main__content}>
				<Header />
				{news.map((elem, index) => {
					return (
						<NewsItem key={index} data={elem} />
					)
				})}
			</div>
		</div>
	)
}

export default News;