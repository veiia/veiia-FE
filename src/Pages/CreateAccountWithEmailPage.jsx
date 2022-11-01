import React from 'react'
import logo from '../pictures/veiia.png'
import { Link } from 'react-router-dom'

function CreateAccountWithEmail() {
    return (
        <div>
            <div className='container container-login'>
                <header className='page-header'>
                    <div className='page-logo'>
                        <img src={logo} alt='' className='veiia-logo'></img>
                    </div>
                    <h1>Добро пожаловать в Veiia</h1>
                </header>
                <div>
                    <p>Зарегистрируйтесь, указав свой адрес электронной почты и пароль.</p>
                    <form>
                        <input type={'email'} className='input-email' ></input>
                        <input type={'password'} className='input-password'></input>
                        <input type={'submit'} className='input-submit'></input>
                    </form>
                    <p className='suggest-login-an-account'>У вас уже есть аккаунт?<Link className='registrationLink' to={'/login-with-email'} > Войти.</Link></p>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountWithEmail