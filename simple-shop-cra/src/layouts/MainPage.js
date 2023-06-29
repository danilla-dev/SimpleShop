import React from 'react'
import Categories from './Categories'
import Products from '../components/Products'

const MainPage = () => {
	return (
		<div className='main-page wrapper'>
			<Categories />
			<Products  />
		</div>
	)
}

export default MainPage
