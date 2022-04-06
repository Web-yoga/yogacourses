import React from 'react';
import Header from '../../modules/Navigation/Header';
import Navbar from '../../modules/Navigation/Navbar';
import classes from './../../style.module.scss';

const Shop = () => {
	return (
		<div className={classes.main}>
			<div className={classes.main__navigation}>
				<Navbar />
			</div>
			<div className={classes.main__content}>
				<Header />
				Shop
			</div>
		</div>
	)
}

export default Shop;