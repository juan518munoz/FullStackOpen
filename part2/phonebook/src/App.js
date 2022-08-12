import React, { useState, useEffect } from 'react'
import phoneService from './services/phoneService'
import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm' 
import Numbers from './components/Numbers'
import Notification from './components/Notificarion'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newNameFilter, setNewNameFilter ] = useState('')
  const [ notification, setNotification ] = useState('')
  const [ notificationType, setNotificationType ] = useState('success')

  const hook = () => {    
    phoneService.getAll().then(response => {
      setPersons(response)
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
    
    if ( persons.every( (person) => person.name !== newName )) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      phoneService.create(newPerson).then( addedPerson => {
        console.log(addedPerson)
        setPersons(persons.concat(addedPerson))
        setNewName('')
        setNewNumber('')

        setNotificationType('success')
        setNotification(`Added ${addedPerson.name}`)
        setTimeout(() => {
          setNotification('')
        }, 5000)

      })

      return
    } 

    modifyContact() // if it gets here then it's already on phonebook

  }

  const filterPhoneBookByName = () => {
    if (newNameFilter === '') return persons

    return persons.filter( person =>
      person.name.toLowerCase().includes(newNameFilter.toLowerCase())
    )
  }
  const filteredPersons = filterPhoneBookByName()

  const deleteContact = (id, person) => {
    if (window.confirm(`Delete ${person}?`)) {
      phoneService.remove(id)
      setPersons(persons.filter(person => person.id !== id))  
    }
  }

  const modifyContact = () => {
    if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const person = persons.find(p => p.name === newName)
      const modPerson = { ...person, number: newNumber }
      const id = person.id

      phoneService.update(id, modPerson).then( returnedPerson => {
        setPersons(persons.map(person =>
          person.id !== id ? person : returnedPerson          
        ))
        setNewName('')
        setNewNumber('')

        setNotificationType('success')
        setNotification(`Modified ${returnedPerson.name}`)
        setTimeout(() => {
          setNotification('')
        }, 5000)

      }).catch(error => {        
        setNotificationType('error')
        setNotification(`Information of ${person.name} has already been removed from server`)
        setTimeout(() => {
          setNotification('')
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} type={notificationType}/>
      <Filter newNameFilter={newNameFilter} handle={handleNameFilterChange} />
      <NewContactForm 
          addPerson={addPerson}
          newName={newName}
          newNumber={newNumber}
          handleName={handleNameChange}
          handleNumber={handleNumberChange}
      />
      <Numbers 
        persons={filteredPersons} 
        deleteContact={deleteContact}/>
    </div>
    
  )
}

export default App