import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import IconAbout from '../Assets/icon-about.png'
import IconMoney from '../Assets/icon-money.png'
import IconCountry from '../Assets/icon-country.png'
import IconPerson from '../Assets/icon-person.png'
import LuisCoin from '../Views/LuisCoin'
import LuisCountries from '../Views/LuisCountries'
import ChangedLifes from '../Views/LifesLuisChanged'
import AboutLuis from '../Views/AboutLuis'

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    iconBG: {
        background: "linear-gradient(93.37deg, #00EC5E 0%, #00A3FF 100%)",
        borderRadius: "100px",
        boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)",
        height: '50px',
        margin: "10px 0 10px 0",
        position: 'relative',
        width: '50px',       
    },
    icon: {
        height: '30px',
        left: '20%',
        position: 'absolute',
        top: '20%',
    }
})

function SideMenu(){
    const classes = useStyles()

    return (
        <> 
        <BrowserRouter>
            <MenuList className={classes.root}>
            <MenuItem className={classes.iconBG}>
                <Link to="/about">
                    <img src={ IconAbout } alt="Link Sobre" className={classes.icon} />
                </Link>
            </MenuItem>
            <MenuItem className={classes.iconBG}>
                <Link to="/luiscoin">
                    <img src={ IconMoney } alt="Link Luiscoin" className={classes.icon} />
                </Link>
            </MenuItem>
            <MenuItem className={classes.iconBG}>
                <Link to="/countries">
                    <img src={ IconCountry } alt="Link países salvos" className={classes.icon} />
                </Link>
            </MenuItem>
            <MenuItem className={classes.iconBG}>
                <Link to="/changed-lifes">
                    <img src={ IconPerson } alt="Link depoimentos" className={classes.icon} />
                </Link>
            </MenuItem>
            </MenuList>
    
            <Route path="/about" component={ AboutLuis } />
            <Route path="/luiscoin" component={ LuisCoin } />
            <Route path="/countries" component={ LuisCountries } />
            <Route path="/changed-lifes" component={ ChangedLifes } />
        </BrowserRouter>
        </>
    )
}

export default SideMenu