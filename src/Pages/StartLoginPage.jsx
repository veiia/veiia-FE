import React from 'react'
import '../Styles/_StartLoginPage.css'
import logo from '../pictures/veiia.png'
import gitHubLogo from '../pictures/github2.png'
import { Link } from 'react-router-dom'

function LoginPage() {
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
                    <p>Войдите в систему одним из следующих способов:</p>
                    <button name='gitHub' className='gitHub-login-button'>
                        <img src={gitHubLogo} alt="" />
                        <span className='button-text'>GitHub
                        </span>
                    </button>
                    <Link className='email-login-button' to={'/login-with-email'}>Email</Link>
                </div>
                <p className='suggest-creating-an-account'>Еще нет аккаунта?<Link className='registrationLink' to={'/create-account'} > Зарегистрироваться.</Link></p>
            </div>
        </div>
    )
}

export default LoginPage