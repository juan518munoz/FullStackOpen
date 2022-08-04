import React from 'react'
import Person from './Person'

const Numbers = ({persons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {persons.map(person => (
                <Person key={person.name} person={person} />
            ))}
        </div>
    )
}

export default Numbers