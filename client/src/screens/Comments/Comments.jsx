import './Comments.css'
import { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add'

import { getOnePost } from '../../services/posts'
import { postComment, deleteComment, getAllComments } from '../../services/comments'

function Comments(props) {
  const { post_id, id } = useParams()
  const [post, setPost] = useState([])
  // const [comments, setComments] = useState([])
  const [isCreated, setCreated] = useState(false)
  const [formData, setFormData] = useState({
    text: '',
    post_id: Number(post_id)
  })
  const history = useHistory()

  const { text } = formData

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(post_id)
      setPost(post)
    }
    fetchPost()
  }, [isCreated, post_id])

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const commentList = await getAllComments()
  //     const postComments = commentList.filter((comment) => comment.post_id === Number(id))
  //     setComments(postComments)
  //   }
  //   fetchComments()
  // }, [])

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
    // setComment((prevState) => prevState.filter((comment) => comment.id !== id))
    history.push(`/server/${id}/posts/${post_id}`)
  }

  // const handleDeleteComment = async () => {
  //   await deleteComment(id)
  //   history.push(`/server/${id}/posts/${post_id}`)
  // }

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
        {post?.comments?.map((comment) => (
          <div key={comment.id}>
            <p>{comment.user.username}</p>
            <p>{comment.text}</p>
            <div>
              {props.currentUser?.id === comment.user_id && (
                <>
                  <Link to={`/server/${id}/posts/${post_id}/${comment.id}/edit`}><EditIcon /></Link>
                  <button onClick={() => handleDeleteComment(comment.id)}><DeleteOutlineIcon /></button>
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
