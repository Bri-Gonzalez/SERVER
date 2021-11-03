import './Server.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOneServer} from '../../services/servers'

function Server() {
  const [server, setServer] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchServer = async () => {
      const server = await getOneServer(id)
      setServer(server)
    }
    fetchServer()
  }, [id])

  return (
    <div>
      <p>{server.name}</p>
    </div>
  )
}

export default Server
