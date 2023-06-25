import React from 'react'
import '../styles/MobileMenu.scss'
const MobileMenu = ({ click, className }) => {
	return (
		<div className={className}>
			<ul>
				<li>produkty</li>
				<li>login</li>
				<li>Rejestracja</li>
			</ul>
			<button onClick={click}>x</button>
		</div>
	)
}

export default MobileMenu
