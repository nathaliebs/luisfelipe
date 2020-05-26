import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    nav: {
        backgroundColor: 'transparent',
        height: '72px',
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    link: {
        marginTop: '22px', // valor do marginTop no figma (62px) - marginTop global(40px)
        fontSize: '16px',
        paddingRight: '20px',
        textDecoration: 'none',
        color: '#4D4D4D',
    },
    logo: {
        position: 'absolute',
        left: '0',
        color: '#4D4D4D',
    }
})

function Header() {
    const classes = useStyles()

    return (
        <>
        <BrowserRouter>
            <div className={classes.nav}>
                <h2 className={classes.logo}>Fãs do Luis</h2>
                <Link to="/" className={classes.link}>Explicando o site</Link>
                <Link to="/" className={classes.link}>Quem somos?</Link>
                <Link to="/" className={classes.link}>Contato</Link>
            </div>
        </BrowserRouter>
        </>
    )
}

export default Header
