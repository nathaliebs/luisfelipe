import React from 'react'

import '../Styles/luis-countries.css'
import MapGermany from '../Assets/map-germany.png'
import MapAustralia from '../Assets/map-australia.png'
import MapCanada from '../Assets/map-canada.png'
import MapUnitedStates from '../Assets/map-united-states.png'
import MapJapan from '../Assets/map-japan.png'
import MapSwitzerland from '../Assets/map-switzerland.png'

function LuisCountries(){
    return (
        <>
            <div className="content">
                <p className="title">Países que o <strong>Luis</strong> salvou</p>
                <div className="countries">
                    <div className="left">
                        <div className="border">
                            <p>Alemanha</p>
                            <img src={ MapGermany } alt="Mapa da Alemanha" />
                        </div>
                        <div className="border">
                            <p>Austrália</p>
                            <img src={ MapAustralia } alt="Mapa da Austrália" />
                        </div>
                        <div>
                            <p>Canadá</p>
                            <img src={ MapCanada } alt="Mapa do Canadá" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="border">
                            <img src={ MapUnitedStates } alt="Mapa dos Estados Unidos" />
                            <p>Estados Unidos</p>
                        </div>
                        <div className="border">
                            <img src={ MapJapan } alt="Mapa do Japão" />
                            <p>Japão</p>
                        </div>
                        <div>
                            <img src={ MapSwitzerland } alt="Mapa da Suíça" />
                            <p>Suíça</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LuisCountries
