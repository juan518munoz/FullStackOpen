import React from "react"
import Country from "./Country"
import CountryFull from "./CountryFull"

const Result = ({countries, search}) => {
    const filtered_countries = countries.filter( country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    )

    if ( filtered_countries.length > 10 || search === '' ){
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    else if (filtered_countries.length === 1) {
        const country = filtered_countries[0] 
        return <CountryFull key={country.name.common} country={country}/>
    }

    return (
        <div>
            {filtered_countries.map( country => (
                <Country key={country.name.common} country={country}/>
            ))}
        </div>
    )
}

export default Result