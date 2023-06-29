import React from 'react'
const ProductsActions = props => {
	const products = props.products
	return (
		<div className='products-actions'>
			<div className='products-actions__sort'></div>
			<div className='products-actions__display'></div>
			<p className='products-main-page__counter'>
				Count of products:
				<span>{products.length}</span>
			</p>
		</div>
	)
}

export default ProductsActions
