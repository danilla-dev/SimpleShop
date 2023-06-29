import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'

import '../styles/Product.scss'

const products = [
	{
		title: 'Ray gun',
		category: 'Guns',
		price: 20,
		imageMobile: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-sm.jpg',
		imageDesk: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-lg.jpg',
		path: '',
	},
	{
		title: 'Plumbus',
		category: 'Other',
		price: 20,
		imageMobile: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-sm.jpg',
		imageDesk: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-lg.jpg',
		path: '',
	},
	{
		title: 'Portal-gun',
		category: 'Special',
		price: 20,
		imageMobile: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg',
		imageDesk: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg',
		path: '',
	},
	{
		title: 'Portal-gun',
		category: 'Special',
		price: 20,
		imageMobile: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg',
		imageDesk: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg',
		path: '',
	},
	{
		title: 'Portal-gun',
		category: 'Special',
		price: 20,
		imageMobile: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg',
		imageDesk: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg',
		path: '',
	},
	{
		title: 'Portal-gun',
		category: 'Special',
		price: 20,
		imageMobile: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg',
		imageDesk: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg',
		path: '',
	},
	{
		title: 'Portal-gun',
		category: 'Special',
		price: 20,
		imageMobile: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg',
		imageDesk: 'https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg',
		path: '',
	},
]
const Product = props => {
	const searchCategory = props.match.params.id
	let filterProducts

	const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

	if (searchCategory) {
		filterProducts = products.filter(product => product.category === searchCategory)
	} else {
		filterProducts = products
	}
	const allProducts = filterProducts.map((product, index) => {
		return (
			<li key={index}>
				<div className='main-product'>
					<img className='main-product__img' src={isDesktop ? product.imageDesk : product.imageMobile} alt='' />
					<h3 className='main-product__name'>{product.title}</h3>
					<p className='main-product__category'>{product.category}</p>
					<div className='main-product__action-buttons'>
						<button className='main-product__action-buttons-buy'>{product.price} Buy</button>
						<button className='main-product__action-buttons-add'>
							Add to cart
							<FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
						</button>
					</div>
				</div>
			</li>
		)
	})

	return (
		<>
			<p className='products-main-page__counter'>
				Count of products:
				<span>{filterProducts.length}</span>
			</p>
			<ul className='products-main-page__list'>{allProducts}</ul>
		</>
	)
}

export default Product
