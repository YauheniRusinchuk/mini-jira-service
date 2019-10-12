import React from 'react'
import './login.scss'


function Login() {
	return (
		<div className='login-container'>
			<form>
				<p>ВОЙДИТЕ В АККАУНТ</p>
				<input type='email' placeholder='Почта ...' />
				<input type='password' placeholder='Пароль ...' />
				<button>ВОЙТИ</button>
			</form>
		</div>
	)
}


export default Login;
