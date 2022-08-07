import React from "react"
import Language from "./Language"

const Languages = ({languages}) => {
    return (
        <div>
            <h2>Languages</h2>
            <div>
                {Object.values(languages).map(language => (
                    <Language key={language} language={language}/>
                ))}
            </div>
        </div>
    )
}

export default Languages