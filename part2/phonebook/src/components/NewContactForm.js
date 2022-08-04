import React from 'react'

const NewContactForm = ({addPerson, newName, newNumber, handleName, handleNumber}) => {
    return (
        <div>
            <h2>add a new contact</h2>
            <form onSubmit={addPerson}>
                <div> name: 
                    <input value={newName} onChange={handleName} /> 
                </div>
                <div> number:
                    <input value={newNumber} onChange={handleNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default NewContactForm