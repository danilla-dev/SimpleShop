import React from 'react'

const products = [
	{ title: 'Gun', category: 'guns', price: 20, image: '', path: '' },
	{ title: 'Plumbus', category: 'other', price: 20, image: '', path: '' },
	{ title: 'Portal-gun', category: 'special', price: 20, image: '', path: '' },
]
const Product = props => {
	const searchCategory = props.match.params.id
	let filterProducts

	if (searchCategory) {
		filterProducts = products.filter(product => product.category === searchCategory)
	} else {
		filterProducts = products
	}

	const allProducts = filterProducts.map((product, index) => {
		return (
			/// its a very basic display of product card with filter - must make better
			<li>
				<h2>{product.title}</h2>
				<p>{product.category}</p>
				<p>{product.price}</p>
			</li>
		)
	})
	return <ul>{allProducts}</ul>
}

export default Product
