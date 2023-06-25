import React from 'react'
import heroImage from '../images/header-mobile.jpg'
import '../styles/HeaderImage.scss'

const HeaderImage = () => {
	return (
		<div className='header-image'>
			<img src={heroImage} alt='Falling Rick and Morty hero image' />
		</div>
	)
}

export default HeaderImage
