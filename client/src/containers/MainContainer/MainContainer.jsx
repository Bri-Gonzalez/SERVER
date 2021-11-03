import './MainContainer.css'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Link } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'

import { getAllServers, getOneServer, postServer, putServer, deleteServer, addPostToServer } from '../../services/servers'
import { getAllPosts, getOnePost, postPost, putPost, deletePost, addCommentToPost } from '../../services/posts'
import { getAllComments, getOneComment, postComment, putComment, deleteComment } from '../../services/comments'
import Home from '../../screens/Home/Home'
import Search from '../../screens/Search/Search'


function MainContainer() {
  const [servers, setServers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchServers = async () => {
      const serverList = await getAllServers()
      setServers(serverList)
    }
    fetchServers()
  }, [])

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
          <Link to='/search'>
            <button>FIND YOUR SERVR</button>
          </Link>
        </div>
      </div>
      <div>
        <Carousel>
          {posts.map((post) => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <Switch>
        <Route path='/search'>
          {/* <Search servers={servers} /> */}
          <h1>hi</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
