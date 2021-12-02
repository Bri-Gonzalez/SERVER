import './Comments.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import PacmanLoader from 'react-spinners/PacmanLoader'

import { getOnePost } from '../../services/posts'
import {
  postComment,
  deleteComment,
  getAllComments,
} from '../../services/comments'

function Comments(props) {
  const { post_id, id } = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [isCreated, setCreated] = useState(false)
  const [isLoaded, setLoaded] = useState(false)
  const [formData, setFormData] = useState({
    text: '',
    post_id: Number(post_id),
  })

  const { text } = formData

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(post_id)
      setPost(post)
    }
    fetchPost()
  }, [post_id])

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments()
      const postComments = commentList.filter(
        (post) => post.post_id === Number(post_id)
      )
      setComments(postComments)
      setLoaded(true)
    }
    fetchComments()
  }, [isCreated, post_id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleCreateComment = async (formData) => {
    const commentData = await postComment(formData)
    setCreated(commentData)
  }

  const handleDeleteComment = async (id) => {
    await deleteComment(id)
    setComments((prevState) => prevState.filter((comment) => comment.id !== id))
  }

  return (
    <div className='comments-pg-container'>
      <div className='post-details-container'>
        <div className='post-details'>
          <Link to={`/server/${id}`}><ArrowBackIcon/></Link>
          <p className='post-username'>{post?.user?.username}</p>
          <p className='post-title'>{post.title}</p>
          {post.image ? <img src={post.image} alt={post.title} /> : ''}
          {post.text ? <p className='post-text'>{post.text}</p> : ''}
        </div>
        <div className='comment-form'>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleCreateComment(formData)
            }}
          >
            <textarea
              autoFocus
              required
              type='text'
              name='text'
              value={text}
              placeholder='Add a comment'
              onChange={handleChange}
            />
            <br />
            <div className='comment-btn'>
              {props.currentUser ? (
                <button>
                  <AddIcon style={{ fontSize: 18 }} /> &nbsp; add comment
                </button>
              ) : (
                <Link to='/login'>
                  <button>
                    <AddIcon style={{ fontSize: 18 }} /> &nbsp; add comment
                  </button>
                </Link>
              )}
            </div>
          </form>
        </div>
        {!isLoaded ? (
          <div className='loader'>
            <PacmanLoader color='#7BFDF8' />
          </div>
        ) : (
          <div className='comments-container'>
            {comments.map((comment) => (
              <div key={comment.id} className='comment-container'>
                <p className='comment-username'>{comment.user.username}</p>
                <div className='comment-inline'>
                  <p className='comment-text'>{comment.text}</p>
                  <div className='comment-edit-delete'>
                    {props.currentUser?.id === comment.user_id && (
                      <>
                        <Link
                          to={`/server/${id}/posts/${post_id}/${comment.id}/edit`}
                        >
                          <EditIcon style={{ fontSize: 18 }} />
                        </Link>
                        <button onClick={() => handleDeleteComment(comment.id)}>
                          <DeleteOutlineIcon style={{ fontSize: 18 }} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comments
