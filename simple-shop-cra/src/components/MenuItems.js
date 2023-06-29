import React from 'react'
import '../styles/MenuItems.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faCartShopping, faRightToBracket, faUserPlus, faTag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import Categories from '../layouts/Categories'

import '../styles/MenuItems.scss'
let menuItems = [
	{
		title: 'Cart',
		icon: <FontAwesomeIcon icon={faCartShopping} />,
		path: '/cart',
		cName: 'menu-cart',
	},
]
const unloggedUserItems = [
	{
		title: 'Login',
		icon: <FontAwesomeIcon icon={faRightToBracket} />,
		path: '/login',
		cName: 'menu-login',
	},
	{
		title: 'SignUp',
		icon: <FontAwesomeIcon icon={faUserPlus} />,
		path: '/signUp',
		cName: 'menu-signUp',
	},
]
const loggedUserItems = [
	{
		title: 'Account',
		icon: <FontAwesomeIcon icon={faRightToBracket} />,
		path: '/account',
		cName: 'menu-login',
	},
	{
		title: 'Logout',
		icon: <FontAwesomeIcon icon={faUserPlus} />,
		path: '/',
		cName: 'menu-signUp',
	},
]

const MenuItems = ({ showHideMenu }) => {
	const storeItems = menuItems.map((item, index) => {
		return (
			<li key={index} className={item.cName}>
				<Link onClick={showHideMenu} to={item.path}>
					{item.icon}
					<span>{item.title}</span>
				</Link>
			</li>
		)
	})
	const loginItems = unloggedUserItems.map((item, index) => {
		return (
			<li key={index} className={item.cName}>
				<Link onClick={showHideMenu} to={item.path}>
					{item.icon}
					<span>{item.title}</span>
				</Link>
			</li>
		)
	})
	return (
		<ul className='menu-list'>
			<li>
				<Categories showHideMenu={showHideMenu} icon={<FontAwesomeIcon className='categories-icon' icon={faTag} />} />
			</li>
			{storeItems}
			{loginItems}
		</ul>
	)
}

export default MenuItems
