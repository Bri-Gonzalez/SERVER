import './Nav.css'
import { NavLink } from 'react-router-dom'

function Nav(props) {

  return (
    <div className='nav'>
      <NavLink to='/'><h1>SERVER</h1></NavLink>
      {props.currentUser ? (
        <div className='user-links'>
          <p>Hello, {props.currentUser.username}</p>
          <NavLink to='/server/search'>Search</NavLink>
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      ) : (
          <div className='non-user-links'>
            <NavLink to='/server/search'>Search</NavLink>
            <NavLink to='/join'>Join</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </div>
      )}
    </div>
  )
}

export default Nav
