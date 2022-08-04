import React, { useState } from 'react'
import Person from "./components/Person"

const App = () => {
  const [ persons, setPersons ] = useState([ 
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newNameFilter, setNewNameFilter ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNewNameFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault() // evita que se recarge la pagina
    console.log("Adding ", newName, " to contacts")
    
    if ( persons.every( (person) => person.name !== newName )) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      return
    } 

    alert(`${newName} is already added to phonebook`)
  }

  const filterPhoneBookByName = () => {
    if (newNameFilter === '') return persons

    return persons.filter( person =>
      person.name.toLowerCase().includes(newNameFilter.toLowerCase())
    )
  }
  const filteredPersons = filterPhoneBookByName()

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:
        <input value={newNameFilter} onChange={handleNameFilterChange} />
      </div>
      <h2>add a new contact</h2>
      <form onSubmit={addPerson}>
        <div> name: 
          <input value={newName} onChange={handleNameChange} /> 
        </div>
        <div> number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
    
  )
}

export default App