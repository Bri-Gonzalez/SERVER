import './Comments.css'
import { useState, useEffect } from 'react'
import { Link, useParams, Redirect } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add'

import {getOnePost} from '../../services/posts'
import { getAllComments, postComment } from '../../services/comments'


function Comments(props) {
  const { id, post_id } = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [isCreated, setCreated] = useState(false)
  const [formData, setFormData] = useState({
    text: '',
    post_id: Number(post_id)
  })

  const { text } = formData

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments()
      const postComments = commentList.filter((comment) => comment.post_id === Number(id))
      setComments(postComments)
    }
    fetchComments()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleCreateComment = async (formData) => {
    const commentData = await postComment(formData)
    setCreated({commentData})
  }

  if (isCreated) {
    return <Redirect to={`/`} />
  }

  return (
    <div>
      <div>
        <p>{post?.user?.username}</p>
        <p>{post.title}</p>
        {post.image ? <img src={post.image} alt={post.title} /> : ''}
        {post.text ? <p>{post.text}</p> : ''}
      </div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleCreateComment(formData)
        }}>
          <textarea
            autoFocus
            required
            type='text'
            name='text'
            value={text}
            placeholder='Add a comment'
            onChange={handleChange}
          />
          <br/ >
          <button><AddIcon/> add comment</button>
        </form>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.user.username}</p>
            <p>{comment.text}</p>
            <div>
              {props.currentUser?.id === comment.user_id && (
                <>
                  <Link to={`/edit-comment/${comment.id}`}><EditIcon /></Link>
                  <DeleteOutlineIcon />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments
