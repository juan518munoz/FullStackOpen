import React from "react"

const Search = ({newSearch, handle}) => {
    return (
    <form>
        find countries: 
        <input
          value={newSearch}
          onChange={handle}
        />
    </form>
    )
}

export default Search