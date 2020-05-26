import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import '../Styles/header.css'
import Logo from '../logo.svg'

function Header() {
    const handleLogoClick = () => {
        document.getElementById('home').click()
    }

    return (
        <>
        <BrowserRouter>
            <div className="header">
                <img src={Logo} alt="Logo" onClick={handleLogoClick} />
                <nav>
                    <Link to="/">Explicando o site</Link>
                    <Link to="/">Quem somos?</Link>
                    <Link to="/">Contato</Link>
                </nav>
            </div>
            <Link id="home" to="/" />
        </BrowserRouter>
        </>
    )
}

export default Header
