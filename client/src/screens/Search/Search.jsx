import './Search.css'
import { useState } from 'react'

function Search(props) {
  const [searchResult, setSearchResult] = useState([])

  const handleSearch = (e) => {
    const results = props.servers.filter((server) => 
      server.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchResult(results)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={props.server}
          onChange={handleSearch}
          name='Search'
          placeholder='Search SERVR'
          type='text'
          autoFocus
        />
      </form>
    </div>
  )
}

export default Search
