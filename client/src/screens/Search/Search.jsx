import './Search.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
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
      <form onSubmit={handleSubmit} className='search-form'>
        <SearchIcon/>
        <input
          // value={servers.value}
          onChange={handleSearch}
          name='Search'
          placeholder= 'Search SERVR'
          type='text'
          autoFocus
        />
      </form>
      <div>
        <p>Your SERVR not exist? Create one <Link to='server/create-server'>HERE</Link></p>
      </div>
      <div>
        {searchResult.map((server) => (
          <div key={server.id}>
            <Link to={`/server/${server.id}`}>
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
