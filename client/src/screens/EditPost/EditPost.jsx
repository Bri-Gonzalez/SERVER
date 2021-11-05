import './EditPost.css'
import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {getOnePost, putPost} from '../../services/posts'

function EditPost() {
  const {server_id, id} = useParams()
  const [isUpdated, setUpdated] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: '',
    server_id: Number(server_id)
  })

  const { title, text, image } = formData

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id)
      setFormData(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleUpdatePost = async (formData) => {
    const updatePost = await putPost(id, formData)
    setUpdated(updatePost)
  }

  if (isUpdated) {
    return <Redirect to={`/server/${server_id}`} />
  }

  return (
    <div className='edit-post-container'>
      <p>Edit Post</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleUpdatePost(formData)
      }}>
        <label>
          <input
            autoFocus
            required
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
          />
          <br />
          Title
        </label>
        <textarea
          type='text'
          name='text'
          value={text}
          placeholder='Text (optional)'
          onChange={handleChange}
        />
        <label>
          <input
            type='text'
            name='image'
            value={image}
            onChange={handleChange}
          />
          <br />
          Image URL
        </label>
        <button>Save</button>
      </form>
    </div>
  )
}

export default EditPost
