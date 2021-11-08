import './Search.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { getAllServers } from '../../services/servers'

function Search(props) {
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
    <div className='search-container'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='search-bar'>
          <SearchIcon />
          <input
            onChange={handleSearch}
            name='Search'
            placeholder={'Search SERVER'}
            type='text'
            autoFocus
          />
        </div>
      </form>
      <div className='not-exist-question'>
        {props.currentUser ? (
          <p>
            Your Server not exist? Create one{' '}
            <Link to='/server/create'>HERE.</Link>
          </p>
        ) : (
          <p>
            Your Server not exist? <Link to='/login'>LOGIN</Link> to create
          </p>
        )}
      </div>
      <div className='searched-server-container'>
        {searchResult.map((server) => (
          <div key={server.id} className='searched-server'>
            <Link to={`/server/${server.id}`}>
              <button>{server.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
