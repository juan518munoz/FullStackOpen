import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Anecdotes = ({anecdote, votes, voteAnecdote, nextAnecdote}) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
      <Button onClick={voteAnecdote} text={"vote"} />
      <Button onClick={nextAnecdote} text={"next anecdote"} />
    </div>
  )
}

const BestAnecdote = ({anecdote, votes}) => {  
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = ({anecdotes}) => {
  // random anecdote
  const [selected, setSelected] = useState( Math.floor(Math.random() * 5) )
  const [votes, setVotes] = useState( Array(5).fill(0) )
  const [best, setBest] = useState(selected)

  const nextAnecdote = () => {
    const current = selected
    let next = selected
    while (current === next) { // to avoid repetition
      next = Math.floor(Math.random() * 5)
    }
    setSelected(next)
  }

  const voteAnecdote = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)

      bestAnecdote() // update current best
  }

  const bestAnecdote = () => {
    let indexBest = 0
    let currentHighest = 0

    let index = 0
    votes.forEach(anecdoteVotes => {
      if (anecdoteVotes >= currentHighest) {
        currentHighest = anecdoteVotes;
        indexBest = index
      }
      index++
    });

    setBest(indexBest)
  }

  return (
    <div>
      <Anecdotes 
        anecdote={anecdotes[selected]} 
        votes={votes[selected]}
        voteAnecdote={voteAnecdote}
        nextAnecdote={nextAnecdote}
      />
      <BestAnecdote
        anecdote={anecdotes[best]} 
        votes={votes[best]}
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, 
  document.getElementById('root')
)