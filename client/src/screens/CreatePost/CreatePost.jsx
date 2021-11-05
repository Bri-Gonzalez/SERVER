import './CreatePost.css'
import axios from 'axios'
import { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { postPost } from '../../services/posts'

function CreatePost(props) {
  const { server_id } = useParams()
  const [isCreated, setCreated] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: '',
    server_id: Number(server_id),
  })

  const { title, text } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleCreatePost = async (formData) => {
    const postData = await postPost(formData)
    setCreated({ postData })
  }

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "server")
    const res = await axios.post("https://api.cloudinary.com/v1_1/dfryxohde/image/upload", data)
    setFormData((prevState) => ({
      ...prevState,
      image: res.data.url
    }))
  }

  if (isCreated) {
    return <Redirect to={`/server/${server_id}`} />
  }

  return (
    <div className='create-post-container'>
      <p>Create a Post</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleCreatePost(formData)
        }}
      >
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
            type='file'
            name='file'
            onChange={uploadImage}
          />
          <br />
          Image URL
        </label>
        <button>Post</button>
      </form>
    </div>
  )
}

export default CreatePost
