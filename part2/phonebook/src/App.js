import React, { useState } from 'react'
import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm' 
import Numbers from './components/Numbers'

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
      <Filter newNameFilter={newNameFilter} handle={handleNameFilterChange} />
      <NewContactForm 
          addPerson={addPerson}
          newName={newName}
          newNumber={newNumber}
          handleName={handleNameChange}
          handleNumber={handleNumberChange}
      />
      <Numbers persons={filteredPersons} />
    </div>
    
  )
}

export default App