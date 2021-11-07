import './Join.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Join(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='join-container'>
      <div className='join-title'>
        <p>Create An Account</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleJoin(formData)
        }}
      >
        <label>
          <input
            autoFocus
            required
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <br />
          Email
        </label>
        <label>
          <input
            required
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
          <br />
          Username
        </label>
        <label>
          <input
            required
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <br />
          Password
        </label>
        <button>Join</button>
      </form>
      <p className='already-joined'>
        Already apart of SERVR? <Link to='/login'>LOG IN</Link>
      </p>
    </div>
  )
}

export default Join
