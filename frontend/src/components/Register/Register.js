import React from 'react'
import './register.scss'


function Register() {
	return (
		<div className='register-container'>
			<form>
				<p>РЕГИСТРАЦИЯ НОВОГО АККАУНТА</p>
				<input type='email' placeholder='Почта ...' />
				<input type='password' placeholder='Пароль ...' />
				<input type='password' placeholder='Повторить пароль ...' />
				<button>ВОЙТИ</button>
			</form>
		</div>
	)
}

export default Register;
