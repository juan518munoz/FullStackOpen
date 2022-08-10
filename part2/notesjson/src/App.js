import React, { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    noteService.getAll().then(response => {
      setNotes(response)
    })
  }
  useEffect(hook, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }

    noteService.create(noteObject).then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
    })
  }

  const HandleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.update(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    }).catch(error => {
      alert(`the note '${note.content} was already deleted from server`)
      setNotes(notes.filter(n => n.id !== id)) // remove deleted/error note
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all" }
        </button>
      </div>
      <ul>
        {notesToShow.map( (note, i) => (
          <Note 
            key={i} 
            note={note} 
            toggleImportance={ () => toggleImportanceOf(note.id) }
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={HandleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App