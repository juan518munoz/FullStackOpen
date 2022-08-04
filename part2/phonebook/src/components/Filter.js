import React from 'react'

const Filter = ({newNameFilter, handle}) => {
    return (
        <div>
            filter shown with:
            <input value={newNameFilter} onChange={handle} />
        </div>
    )
}


export default Filter