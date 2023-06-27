import React, { Children, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Product from '../components/Product'
import '../styles/Products.scss'

const Products = ({ children }) => {
	const [count, setCount] = useState(null)

	handleCount = () => {
		
	}

	return (
		<div className='products-main-page wrapper'>
			<div className='products-counter'>
				<span>{count}</span>
			</div>
			<Switch>
				<Route path={'/products/:id'} exact component={Product}></Route>
				<Route path={'/products/'} exact component={Product}></Route>
				<Route path={'/'} exact component={Product}></Route>
			</Switch>
		</div>
	)
}

export default Products
