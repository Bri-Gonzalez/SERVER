import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './Layout.css'

function Layout(props) {
  return (
    <div>
      <Nav currentUser={props.currentUser} handleLogout={props.handleLogout}/>
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
