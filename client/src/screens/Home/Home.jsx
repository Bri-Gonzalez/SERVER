import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { getAllServers } from '../../services/servers'

function Home() {
  const [servers, setServers] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchServers = async () => {
      const serverList = await getAllServers()
      setServers(serverList)
      setLoaded(true)
    }
    fetchServers()
  }, [])

  return (
    <div className='home-container'>
      <div className='header-container'>
        <img
          src='https://res.cloudinary.com/dfryxohde/image/upload/v1635958718/Server/javier-martinez-hUD0PUczwJQ-unsplash_2_vxdtuw.jpg'
          alt='xbox controller'
        />
        <div className='call-to-action'>
          <p>
            A place where gamers hang out, collaborate, show creations, and
            share accomplishments.
          </p>
          <Link to='/server/search'>
            <button>
              <b>FIND YOUR SERVER</b>
            </button>
          </Link>
        </div>
      </div>
      <div className='carousel-container'>
        {!isLoaded ? (
          <div className='loader'>
            <PacmanLoader color='#7BFDF8' />
          </div>
        ) : (
          <div className='carousel'>
            <p className='carousel-title'>Top Gaming Servers</p>
            <Carousel
              navButtonsAlwaysVisible={true}
              stopAutoPlayOnHover={true}
              navButtonsProps={{
                style: {
                  backgroundColor: 'transparent',
                  border: '2px solid #7BFDF8',
                  color: '#7BFDF8',
                  display: 'none',
                },
              }}
              indicatorContainerProps={{
                style: {
                  marginTop: '20px',
                },
              }}
              indicatorIconButtonProps={{
                style: {
                  color: '#7BFDF8',
                },
              }}
            >
              {servers.map((server) => (
                <div key={server.id} className='carousel-servers'>
                  <Link to={`/server/${server.id}`}>
                    <div className='carousel-server-name'>
                      <p>{server.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
