import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'

function Header() {
	return (
		<header>
			<nav>
				<div className='header-menu'>
					<Link to="/">
						ГЛАВНАЯ
					</Link>
					<Link to="/service">
						О СЕРВИСЕ
					</Link>
				</div>
				<div className='header-auth'>
					<Link className='btn-login' to="/login">
						ВОЙТИ
					</Link>
					<Link className='btn-rgstr' to="/register">
						РЕГИСТРАЦИЯ
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header;
