import React from 'react'
import { Link } from 'react-router-dom'
import { MenuList, MenuItem } from '@material-ui/core'

import '../Styles/side-menu.css'
import IconAbout from '../Assets/icon-about.png'
import IconMoney from '../Assets/icon-money.png'
import IconCountry from '../Assets/icon-country.png'
import IconPerson from '../Assets/icon-person.png'


function SideMenu(){
    return (
        <>
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
            </MenuList>
        </>
    )
}

export default SideMenu
