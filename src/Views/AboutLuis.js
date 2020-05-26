import React from 'react'
import BgImage from '../Assets/image-about.png'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    depoiment: {
        color: 'white',
        position: 'absolute',
        top: '550px',
        fontSize: '40px',
        left: '480px',
    },
    marked: {
        color: '#00EC5E',
    },
    subtitle: {
        position: 'absolute',
        color: 'white',
        bottom: '3px',
        fontSize: '30px',
        right: '50px',
    },
    disclaimer: {
        color: 'white',
        position: 'absolute',
        fontSize: '12px',
        bottom: '10px',
    }
})

function AboutLuis(){
    const classes = useStyles()

    return (
        <>
            <img style={{width: '100%', position: 'static'}} src={ BgImage } alt="Background" />
            <p className={classes.depoiment}>
                <span className={classes.marked}>Luis</span> é fundador da Etec de Embu e atualmente<br />
                leciona na mesma, por conta da sua paixão pelo<br />
                que faz. <br />
                <br />
                Nos tempos livres faz alguns freelas, como<br /> 
                construir foguetes para a SpaceX ou tirar fotos de<br />
                buracos negros da sua sacada para a Nasa.</p>
            <p className={classes.subtitle}>- Dia que o <span className={classes.marked}>Luis</span> assistiu o Big Bang ao vivo</p>
            <p className={classes.disclaimer}>*Este site não possui compromisso algum com fatos e se trata de um trabalho acadêmico</p>
        </>
    )
}

export default AboutLuis
