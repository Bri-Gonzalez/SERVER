import './CreateServer.css'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { postServer } from '../../services/servers'

function CreateServer() {
  const [isCreated, setCreated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
  })

  const { name } = formData
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleCreateServer = async (formData) => {
    const serverData = await postServer(formData)
    setCreated({serverData})
  }

  if (isCreated) {
    return <Redirect to={`/server/search`} />
  }


  return (
    <div className='create-server-container'>
      <p>Create a Server</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleCreateServer(formData)
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
        <br />
        <button>Create Server</button>
      </form>
    </div>
  )
}

export default CreateServer
