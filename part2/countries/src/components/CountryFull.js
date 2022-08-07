import React, { useState, useEffect } from "react"
import axios from "axios"
import Languages from "./Languages"
import Weather from "./Weather"

const CountryFull = ({country}) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    const hook = () => {
        const request = (
            'http://api.weatherstack.com/current?access_key=' + api_key + 
            '&query=' + country.capital
        )
        
        axios
        .get(request)
        .then(response => {
          console.log('promise fulfilled')
          setWeather(response.data)
        })
    }
    useEffect(hook, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (weather.length === 0) return <div></div> // Avoid crashing while loading
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>
                Capital: {country.capital} <br></br>
                Population: {country.population}
            </p>

            <Languages languages={country.languages} /> <br></br>
        
            <img src={country.flags.png} alt="flag"></img>

            <Weather capital={country.capital} weather={weather} />
        </div>
    )
}

export default CountryFull