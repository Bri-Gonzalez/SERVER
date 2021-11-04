import './Comments.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory, Link } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import {getOnePost} from '../../services/posts'
import { getAllComments, postComment } from '../../services/comments'


function Comments(props) {
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [formData, setFormData] = useState({
    text: ''
  })
  const [isCreated, setCreated] = useState(false)
  const { id } = useParams()
  const history = useHistory()

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
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await postComment(formData)
    setCreated({created})
  }

  // if (isCreated) {
  //   history.push('/server/:id/posts/:id')
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
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder='Add a comment'
            name='comment'
            required
            autoFocus
            onChange={handleChange}
          />
          <br/ >
          <button>+ add comment</button>
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
