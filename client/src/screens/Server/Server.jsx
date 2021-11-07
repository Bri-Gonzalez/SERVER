import './Server.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { getOneServer } from '../../services/servers'
import { getAllPosts, deletePost } from '../../services/posts'


function Server(props) {
  const [server, setServer] = useState([])
  const [posts, setPosts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchServer = async () => {
      const server = await getOneServer(id)
      setServer(server)
    }
    fetchServer()
  }, [id])

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      const serverPosts = postList.filter((post) => post.server_id === Number(id))
      setPosts(serverPosts)
    }
    fetchPosts()
  }, [id])

  const handleDeletePost = async (id) => {
    await deletePost(id)
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  return (
    <div className='server-container'>
      <div className='server-title-container'>
        <p>{server.name}</p>
        {props.currentUser?.id === server.user_id && (
          <Link to={`/server/${server.id}/edit`}>
            <EditIcon style={{ fontSize: 20 }}/>
          </Link>
        )}
      </div>
      <div className ='create-post-btn'>
        {props.currentUser ? <Link to={`/server/${server.id}/create-posts`}><button><b>+</b> Create Post</button></Link> : <Link to='/login'><button>+ Create Post</button></Link>}
      </div>
      <div className='post-container'>
        {posts.map((post) => (
          <div key={post.id} className='post'>
            <p className='post-username'>{post.user.username}</p>
            <p className='post-title'>{post.title}</p>
            {post.image ? <img src={post.image} alt={post.title} /> : ''}
            {post.text ? <p>{post.text}</p> : ''}
            <Link to={`/server/${server.id}/posts/${post.id}`}>
              <p className='post-comments'><ChatBubbleOutlineIcon/> &nbsp; {post.comments.length} Comments</p>
            </Link>
            <div>
              {props.currentUser?.id === post.user_id && (
                <>
                  <Link to={`/server/${server.id}/post/${post.id}/edit`}><EditIcon/></Link>
                  <button onClick={() => handleDeletePost(post.id)}><DeleteOutlineIcon/></button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Server
