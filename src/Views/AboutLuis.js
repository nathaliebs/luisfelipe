import React from 'react'

import '../Styles/about-luis.css'
import BgImage from '../Assets/image-about.png'


function AboutLuis(){
    return (
        <>
            <img style={{width: '100%', position: 'static'}} src={ BgImage } alt="Background" />
            <p className="depoiment">
                <strong>Luis</strong> é fundador da Etec de Embu e atualmente<br />
                leciona na mesma, por conta da sua paixão pelo<br />
                que faz. <br />
                <br />
                Nos tempos livres faz alguns freelas, como<br />
                construir foguetes para a SpaceX ou tirar fotos de<br />
                buracos negros da sua sacada para a Nasa.</p>
            <p className="subtitle">- Dia que o <strong>Luis</strong> assistiu o Big Bang ao vivo</p>
        </>
    )
}

export default AboutLuis
