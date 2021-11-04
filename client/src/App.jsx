import './App.css'

import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import Layout from './layouts/Layout/Layout'
import Join from './screens/Join/Join'
import Login from './screens/Login/Login'
import MainContainer from './containers/MainContainer/MainContainer'

import Search from './screens/Search/Search'
import Server from './screens/Server/Server'
import Comments from './screens/Comments/Comments'
import CreateServer from './screens/CreateServer/CreateServer'

import {loginUser, registerUser, removeToken, verifyUser} from './services/auth'
import Home from './screens/Home/Home'
import CreatePost from './screens/CreatePost/CreatePost'
import EditServer from './screens/EditServer/EditServer'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleJoin = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/join'>
            <Join handleJoin={handleJoin}/>
          </Route>
          <Route path='/login'>
            <Login handleLogin={handleLogin}/>
          </Route>
          <Route path='/server/:server_id/create-posts'>
            <CreatePost />
          </Route>
          <Route path='/server/search'>
            <Search currentUser={currentUser}/>
          </Route>
          <Route path='/server/create'>
            <CreateServer/>
          </Route>
          <Route path='/server/:id/posts/:id'>
              <Comments currentUser={currentUser}/>
          </Route>
          <Route path='/server/:id/edit'>
            <EditServer/>
          </Route>
          <Route path='/server/:id'>
            <Server currentUser={currentUser}/>
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App;
