import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/header.css'
import Logo from '../logo.svg'

function Header() {
    const handleLogoClick = () => {
        document.getElementById('home').click()
    }

    return (
        <>
            <div className="header">
                <img src={Logo} alt="Logo" onClick={handleLogoClick} />
                <nav>
                    <Link to="/">Explicando o site</Link>
                    <Link to="/">Quem somos?</Link>
                    <Link to="/">Contato</Link>
                </nav>
            </div>
            <Link id="home" to="/" />
        </>
    )
}

export default Header
