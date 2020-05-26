import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import '../Styles/header.css'
import Logo from '../logo.svg'

function Header() {
    return (
        <>
        <BrowserRouter>
            <div className="header">
                <img src={Logo} alt="Logo" />
                <nav>
                    <Link to="/">Explicando o site</Link>
                    <Link to="/">Quem somos?</Link>
                    <Link to="/">Contato</Link>
                </nav>
            </div>
        </BrowserRouter>
        </>
    )
}

export default Header
