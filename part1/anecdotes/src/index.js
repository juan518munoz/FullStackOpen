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
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
      <Button onClick={voteAnecdote} text={"vote"} />
      <Button onClick={nextAnecdote} text={"next anecdote"} />
    </div>
  )
}

const App = ({anecdotes}) => {
  // random anecdote
  const [selected, setSelected] = useState( Math.floor(Math.random() * 5) )
  const [votes, setVotes] = useState( Array(5).fill(0) )

  const nextAnecdote = () => {
    setSelected( Math.floor(Math.random() * 5) )
  }

  const voteAnecdote = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
  }

  return (
    <div>
      <Anecdotes 
        anecdote={anecdotes[selected]} 
        votes={votes[selected]}
        voteAnecdote={voteAnecdote}
        nextAnecdote={nextAnecdote}
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