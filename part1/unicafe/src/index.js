import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Feedback = ({increaseGood, increaseNeutral, increaseBad}) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text={"good"}/>
      <Button onClick={increaseNeutral} text={"neutral"}/>
      <Button onClick={increaseBad} text={"bad"}/>
    </div>
  )
}

const Score = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({goodCount, neutralCount, badCount}) => {
  const total = goodCount + neutralCount + badCount
  const average = (goodCount - badCount) / total
  const positive = (goodCount * 100) / total

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Score text={"good"} value={goodCount}/>
          <Score text={"neutral"} value={neutralCount}/>
          <Score text={"bad"} value={badCount}/>
          <Score text={"all"} value={total}/>
          <Score text={"average"} value={average}/>
          <Score text={"positive"} value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
      setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Feedback 
        increaseGood={increaseGood} 
        increaseNeutral={increaseNeutral}
        increaseBad={increaseBad}
      />
      <Statistics 
        goodCount={good}
        neutralCount={neutral}
        badCount={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)