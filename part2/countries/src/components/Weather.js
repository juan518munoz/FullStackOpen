import React from "react"

const Weather = ({capital, weather}) => {
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature: {weather.current.temperature} Celcius</p>
            <img src={weather.current.weather_icons[0]} alt="icon"></img>
            <p>
                wind: {weather.current.wind_speed} 
                mph direction {weather.current.wind_dir}
            </p>
        </div>
    )
}

export default Weather