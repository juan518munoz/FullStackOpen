import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Buttons = ({increaseCount, resetCount}) => {
  return (
    <div>
      <Button handleClick={increaseCount} text={"increase count"}/>
      <Button handleClick={resetCount} text={"reset count"}/>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0) // le agrega 'state' al componente counter y lo inicializa en 0
                                              // setCounter es la funcion que setea (cambia de state) al counter

  const increaseCount = () => setCounter(counter + 1)

  const resetCount = () => setCounter(0) 

  return (
    <div> 
      <Display counter={counter}/>
      <Buttons 
        increaseCount={increaseCount} 
        resetCount={resetCount} 
      />
    </div>
  )
}

ReactDOM.render (
  <App />,
  document.getElementById('root')
)