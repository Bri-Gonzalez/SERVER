import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import { getAllPosts } from '../../services/posts'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])

  return (
    <div className='home-container'>
      <div className='header-container'>
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1635958718/Server/javier-martinez-hUD0PUczwJQ-unsplash_2_vxdtuw.jpg' alt='xbox controller' />
        <div className='call-to-action'>
          <p>A place where gamers hang out, collaborate, show creations, and share accomplishments.</p>
          <Link to='/server/search'>
            <button><b>FIND YOUR SERVER</b></button>
          </Link>
        </div>
      </div>
      <div className='carousel-container'>
        <div className='carousel'>
          <Carousel
            navButtonsAlwaysVisible={true}
            stopAutoPlayOnHover={true}
            navButtonsProps={{
              style: {
                backgroundColor: 'transparent',
                border: '2px solid #7BFDF8',
                color: '#7BFDF8'
              }
            }}>
            {posts.map((post) => (
              <div key={post.id} className='carousel-posts'>
                <Link to={`/posts/${post.id}`}>
                  <div>
                    <p className='carousel-username'>{post.user.username}</p>
                    <p className='carousel-title'>{post.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home
