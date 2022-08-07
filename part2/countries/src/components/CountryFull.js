import React, { useState } from "react"
import Languages from "./Languages"


const CountryFull = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>
                Capital: {country.capital} <br></br>
                Population: {country.population}
            </p>

            <Languages languages={country.languages} /> <br></br>
            
            <img src={country.flags.png} alt="flag"></img>
        </div>
    )
}

export default CountryFull