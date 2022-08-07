import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm' 
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newNameFilter, setNewNameFilter ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

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