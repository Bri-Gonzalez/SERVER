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
    <div>
      <div className='call-to-action'>
        <img src='https://res.cloudinary.com/dfryxohde/image/upload/v1635958718/Server/javier-martinez-hUD0PUczwJQ-unsplash_2_vxdtuw.jpg' alt='xbox controller' />
        <div>
          <p>A place where gamers hang out, collaborate, show creations, and share accomplishments.</p>
          <Link to='/server/search'>
            <button>FIND YOUR SERVR</button>
          </Link>
        </div>
      </div>
      <div className='carousel-container'>
        <div className='carousel'>
          <Carousel
            navButtonsProps={{
              style: {
                backgroundColor: 'transparent',
                border: '2px solid #7BFDF8',
                color: '#7BFDF8'
              }
            }}>
            {posts.map((post) => (
              <div key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  <p>{post.title}</p>
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
