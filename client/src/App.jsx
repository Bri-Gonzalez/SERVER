import './App.css'

import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import Layout from './layouts/Layout/Layout'
import Join from './screens/Join/Join'
import Login from './screens/Login/Login'
import MainContainer from './containers/MainContainer/MainContainer'

import {loginUser, registerUser, removeToken, verifyUser} from './services/auth'
// import Search from './screens/Search/Search'


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
      <Route exact path='/'>
        <MainContainer />
      </Route>
      <Switch>
        <Route path='/join'>
          <Join handleJoin={handleJoin}/>
        </Route>
        <Route path='/login'>
          <Login handleLogin={handleLogin}/>
        </Route>
      </Switch>
      </Layout>
    </div>
  )
}

export default App;
