import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AboutLuis from './AboutLuis'
import LuisCoin from './LuisCoin'
import LuisCountries from './LuisCountries'

function Index(){
    return (
        <>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About Luis</Link>
                        </li>
                        <li>
                            <Link to="/luiscoin">LuisCoin</Link>
                        </li>
                        <li>
                            <Link to="/countries">Luis Countries</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/about" component={ AboutLuis } />
                <Route path="/luiscoin" component={ LuisCoin } />
                <Route path="/countries" component={ LuisCountries } />
            </BrowserRouter>
        </>
    )
}

export default Index