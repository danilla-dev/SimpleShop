import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Product from '../components/Product'

const Products = () => {
	return (
		<ul style={{ listStyle: 'none' }}>
			<Switch>
				<Route path={'/products/:id'} exact component={Product}></Route>
				<Route path={'/products/'} exact component={Product}></Route>
				<Route path={'/'} exact component={Product}></Route>
			</Switch>
		</ul>
	)
}

export default Products
