import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Categories.scss'
import { BsFillCaretDownFill } from 'react-icons/bs'
const categories = [
	{ title: 'Guns', cName: 'guns-category', path: '/products/guns' },
	{ title: 'Other', cName: 'other-category', path: '/products/other' },
	{ title: 'Special', cName: 'special-category', path: '/products/special' },
]

const Categories = ({ icon }) => {
	const [isShowed, setShow] = React.useState(false)

	const allCategories = categories.map((category, index) => {
		return (
			<li className={`categories-list__category  ${category.cName}`} key={index}>
				<Link to={category.path} className={category.cName}>
					{category.title}
				</Link>
			</li>
		)
	})
	const showCategories = () => {
		setShow(!isShowed)
	}
	const arrowStyles = {
		transform: 'rotate(180deg)',
	}
	return (
		<div className='categories'>
			<p className='categories-text'>
				{icon ? icon : null}
				Categories
				<BsFillCaretDownFill style={isShowed ? arrowStyles : null} onClick={showCategories} />
			</p>
			<ul className={!isShowed ? `categories-list categories-list--hide` : 'categories-list'}>{allCategories}</ul>
		</div>
	)
}

export default Categories