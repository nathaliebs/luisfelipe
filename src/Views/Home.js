import React from 'react'

import '../Styles/home.css'
import Background from '../Assets/image-home-background.png'
import Luis from '../Assets/image-home-luis.png'

function Home(){
    return (
        <>
            <img src={ Background } alt="Fundo de Gelo" className="background" />
            <img src={ Luis } alt="Luis" className="luis" />
            <div className="name">
                <p className="first-name">Luis</p>
                <p className="last-name">felipe</p>
            </div>
        </>
    )
}

export default Home
