import './Search.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {getAllServers} from '../../services/servers'

function Search() {
  const [searchResult, setSearchResult] = useState([])
  const [servers, setServers] = useState([])

  useEffect(() => {
    const fetchServers = async () => {
      const serverList = await getAllServers()
      setServers(serverList)
      setSearchResult(serverList)
    }
    fetchServers()
  }, [])


  const handleSearch = (e) => {
    const results = servers.filter((server) => 
      server.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchResult(results)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          // value={servers.value}
          onChange={handleSearch}
          name='Search'
          placeholder='Search SERVR'
          type='text'
          autoFocus
        />
      </form>
      <div>
        {searchResult.map((server) => (
          <div key={server.id}>
            <Link to={`/servers/${server.id}`}>
              <p>{server.name}</p>
            </Link>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Search
