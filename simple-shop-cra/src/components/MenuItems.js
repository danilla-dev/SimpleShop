import React from 'react'
import '../styles/MenuItems.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHouse, faRightToBracket, faUserPlus, faTag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../styles/MenuItems.scss'
import Categories from '../layouts/Categories'

let menuItems = [
	{
		title: 'Home',
		icon: <FontAwesomeIcon icon={faHouse} />,
		path: '/',
		cName: 'menu-home',
	},
	{
		title: 'Products',
		icon: <FontAwesomeIcon icon={faCartPlus} />,
		path: '/products',
		cName: 'menu-products',
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

const MenuItems = ({ click }) => {
	const storeItems = menuItems.map((item, index) => {
		return (
			<li key={index} className={item.cName}>
				<Link onClick={click} to={item.path}>
					{item.icon}
					<span>{item.title}</span>
				</Link>
			</li>
		)
	})
	const loginItems = unloggedUserItems.map((item, index) => {
		return (
			<li key={index} className={item.cName}>
				<Link onClick={click} to={item.path}>
					{item.icon}
					<span>{item.title}</span>
				</Link>
			</li>
		)
	})
	return (
		<ul className='menu-list'>
			{storeItems}
			<li>
				<Categories icon={<FontAwesomeIcon className='categories-icon' icon={faTag} />} />
			</li>
			{loginItems}
		</ul>
	)
}

export default MenuItems
