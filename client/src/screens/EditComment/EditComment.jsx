import './EditComment.css'
import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {getOneComment, putComment} from '../../services/comments'

function EditComment() {
  const { post_id, id } = useParams()
  const [isUpdated, setUpdated] = useState(false)
  const [formData, setFormData] = useState({
    text: '',
    post_id: Number(post_id)
  })

  const { text } = formData

  useEffect(() => {
    const fetchComment = async () => {
      const comment = await getOneComment(id)
      setFormData(comment)
    }
    fetchComment()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleUpdateComment = async (formData) => {
    const updateComment = await putComment(id, formData)
    setUpdated(updateComment)
  }

  if (isUpdated) {
    return <Redirect to={`/server/${id}/posts/${post_id}`} />
  }

  return (
    <div className='edit-comment-container'>
      <p>Edit Comment</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleUpdateComment(formData)
      }}>
        <textarea
          autoFocus
          required
          type='text'
          name='text'
          value={text}
          onChange={handleChange}
        />
        <br />
        <button>Save</button>
      </form>
    </div>
  )
}

export default EditComment
