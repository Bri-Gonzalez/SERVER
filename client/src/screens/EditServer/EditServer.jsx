import './EditServer.css'
import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {getOneServer, putServer} from '../../services/servers'

function EditServer() {
  const [isUpdated, setUpdated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
  })

  const { name } = formData
  const { id } = useParams()

  useEffect(() => {
    const fetchServer = async () => {
      const server = await getOneServer(id)
      setFormData(server)
    }
    fetchServer()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleUpdateServer = async (formData) => {
    const updateServer = await putServer(id, formData)
    setUpdated(updateServer)
  }

  if (isUpdated) {
    return <Redirect to={`/server/${id}`} />
  }

  return (
    <div>
      <p>Edit Server</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleUpdateServer(formData)
      }}>
        <label>
          <input
            autoFocus
            required
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
          />
          <br />
          Server Name
        </label>
        <button>Save</button>
      </form>
    </div>
  )
}

export default EditServer
