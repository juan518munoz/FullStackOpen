import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Result from './components/Result'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  useEffect(hook, [])
  
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <Search newSearch={newSearch} handle={handleSearchChange} />
      <Result countries={countries} search={newSearch}/>
    </div>
  )
}

export default App