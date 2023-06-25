import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import HeaderImage from '../components/HeaderImage'

const Header = () => {
	return (
		<>
			<Navigation></Navigation>
			<HeaderImage></HeaderImage>
		</>
	)
}

export default Header
