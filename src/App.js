import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Views/Home'
import LuisCoin from './Views/LuisCoin'
import LuisCountries from './Views/LuisCountries'
import ChangedLifes from './Views/LifesLuisChanged'
import AboutLuis from './Views/AboutLuis'
import SideMenu from './Components/SideMenu'
import Header from './Components/Header'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <SideMenu />
                <Route exact path="/" component={ Home } />
                <Route exact path="/sobre" component={ AboutLuis } />
                <Route exact path="/luiscoin" component={ LuisCoin } />
                <Route exact path="/paises-salvos" component={ LuisCountries } />
                <Route exact path="/vidas-mudadas" component={ ChangedLifes } />
            </BrowserRouter>
        </>
    );
}

export default App;
