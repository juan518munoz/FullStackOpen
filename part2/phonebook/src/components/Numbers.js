import React from 'react'
import Person from './Person'

const Numbers = ({persons, deleteContact}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {persons.map(person => (
                <Person 
                    key={person.name}
                    person={person} 
                    deleteContact={ () => deleteContact(person.id, person.name) }
                />
            ))}
        </div>
    )
}

export default Numbers