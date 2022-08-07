import React, {useState} from "react"
import CountryFull from "./CountryFull"

const Country = ({country}) => {
    const [showFull, setShowFull] = useState(false)

    const changeToFullView = () => {
        setShowFull(true)
    }

    return (
        <div>
            {showFull ? <CountryFull key={country.name.common} country={country}/> :
            <div>
                {country.name.common}
                <button onClick={changeToFullView}>
                    show
                </button>
            </div>
            }
        </div>
    )
}

export default Country