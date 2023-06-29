import React, { Children, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductsList from './ProductsList'
import '../styles/Products.scss'

const Products = () => {
	return (
		<div className='products-main-page'>
			<Switch>
				<Route path={'/products/:id'} exact component={ProductsList}></Route>
				<Route path={'/products/'} exact component={ProductsList}></Route>
				<Route path={'/'} exact component={ProductsList}></Route>
			</Switch>
		</div>
	)
}

export default Products
