import React from 'react';
import classes from './../news.module.scss';
import Image from './../../../components/ui/Image/index';
import Title from './../../../components/ui/Title/index';
import TextCenter from './../../../components/ui/Text/TextCenter';

const NewsItem = ({ data }) => {
	return (
	<div className={classes.news}>
		<Image sizeWidth="40%">
			<img alt={data.title} src={data.image} />
		</Image>
		<div className={classes.news__body}>
			<Title>{data.title}</Title>
			<TextCenter>{data.description}</TextCenter>
		</div>
	</div>
	)
}

export default NewsItem;