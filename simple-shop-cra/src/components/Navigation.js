import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { PiSpiralFill } from 'react-icons/pi'
import MenuItems from '../components/MenuItems'
import '../styles/Navigation.scss'

const Navigation = () => {
	const [isShowed, setShow] = React.useState(false)
	const showMenu = () => {
		setShow(!isShowed)
		console.log('klikniety')
	}

	return (
		<nav className='nav'>
			<div className='nav__container wrapper'>
				<div className='nav__logo'>
					<PiSpiralFill className='nav__logo-icon' icon={faBasketShopping} />
					<span className='nav__logo-text'>InterStore</span>
				</div>
				<button onClick={showMenu} className='nav__menu-show-button'>
					<FontAwesomeIcon className='nav__menu-show-icon' icon={faBars} />
				</button>
			</div>
			<div className={isShowed ? 'nav__menu nav__menu--active' : 'nav__menu'}>
				<button onClick={showMenu} className='nav__menu-close-button'>
					<FontAwesomeIcon className='nav__menu-close-icon' icon={faXmark} />
				</button>
				{<MenuItems click={showMenu} />}
			</div>
		</nav>
	)
}

export default Navigation