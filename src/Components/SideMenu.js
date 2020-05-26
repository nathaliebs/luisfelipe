import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { MenuList, MenuItem } from '@material-ui/core'

import '../Styles/side-menu.css'
import IconAbout from '../Assets/icon-about.png'
import IconMoney from '../Assets/icon-money.png'
import IconCountry from '../Assets/icon-country.png'
import IconPerson from '../Assets/icon-person.png'

import Home from '../Views/Home'
import LuisCoin from '../Views/LuisCoin'
import LuisCountries from '../Views/LuisCountries'
import ChangedLifes from '../Views/LifesLuisChanged'
import AboutLuis from '../Views/AboutLuis'

function SideMenu(){
    return (
        <>
        <BrowserRouter>
            <MenuList className="side-menu">
                <Link to="/sobre">
                    <MenuItem>
                        <img src={ IconAbout } alt="Link Sobre" />
                        <p>Sobre o Luis</p>
                    </MenuItem>
                </Link>
                <Link to="/luiscoin">
                    <MenuItem>
                        <img src={ IconMoney } alt="Link Luiscoin" />
                        <p>Moeda do Luis</p>
                    </MenuItem>
                </Link>
                <Link to="/paises-salvos">
                    <MenuItem>
                        <img src={ IconCountry } alt="Link países salvos" />
                        <p>Países salvos pelo Luis</p>
                    </MenuItem>
                </Link>
                <Link to="/vidas-mudadas">
                    <MenuItem>
                        <img src={ IconPerson } alt="Link depoimentos" />
                        <p>Pessoas salvas pelo Luis</p>
                    </MenuItem>
                </Link>
            </MenuList>

            <Route path="/" component={ Home } />
            <Route path="/sobre" component={ AboutLuis } />
            <Route path="/luiscoin" component={ LuisCoin } />
            <Route path="/paises-salvos" component={ LuisCountries } />
            <Route path="/vidas-mudadas" component={ ChangedLifes } />
        </BrowserRouter>
        </>
    )
}

export default SideMenu
