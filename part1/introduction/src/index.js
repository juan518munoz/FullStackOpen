import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
        Hello {props.name}, you are {props.age} years old
    </div>
  )
}

const Footer = () => {
  return (
    <div>
        <a href='https://github.com/juan518munoz/'>GithubPage</a>
    </div>
  )
}

const App = () => {
  const name = "Martin"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Juan" age={26 + 10}/>
      <Hello name={name} age={age}/>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))