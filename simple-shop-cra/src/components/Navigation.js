import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import MobileMenu from '../components/MobileMenu'
import '../styles/Navigation.scss'

const Navigation = () => {
	const [isActive, setActive] = React.useState(false)
	let menuVar = null
	const showMenu = () => {
		setActive(!isActive)
		console.log('dziala')
	}
	if (isActive) {
		menuVar = 'menu--active'
	} else {
		menuVar = 'menu--hide'
	}

	return (
		<nav className='nav'>
			<div className='nav__container wrapper'>
				<div className='nav__logo'>
					<FontAwesomeIcon className='nav__logo-icon' icon={faBasketShopping} />
					<span className='nav__logo-text'>SimpleShop</span>
				</div>
				<button onClick={showMenu} className='nav__menu-button'>
					<FontAwesomeIcon className='nav__menu-icon' icon={faBars} />
				</button>
			</div>
			<MobileMenu click={showMenu} className={`menu ${menuVar}`} />
		</nav>
	)
}

export default Navigation
