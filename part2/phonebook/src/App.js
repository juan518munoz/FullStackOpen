import React, { useState } from 'react'
import Person from "./components/Person"

const App = () => {
  const [ persons, setPersons ] = useState(
    [ { name: 'Arto Hellas' } ]
  ) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault() // evita que se recarge la pagina
    console.log("Adding ", newName, " to contacts")
    
    if ( persons.every( (person) => person.name !== newName )) {
      const newPerson = {
        name: newName
      }
  
      setPersons(persons.concat(newPerson))
      setNewName('')
      return
    } 

    alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
    
  )
}

export default App