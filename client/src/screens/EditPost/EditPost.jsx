import './EditPost.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getOnePost, putPost } from '../../services/posts'
import PanoramaIcon from '@mui/icons-material/Panorama'

function EditPost() {
  const { server_id, id } = useParams()
  const [isUpdated, setUpdated] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: '',
    server_id: Number(server_id),
  })

  const { title, text } = formData

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

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'server')
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dfryxohde/image/upload',
      data
    )
    setFormData((prevState) => ({
      ...prevState,
      image: res.data.url,
    }))
  }

  if (isUpdated) {
    return <Redirect to={`/server/${server_id}`} />
  }

  return (
    <div className='edit-post-container'>
      <p>Edit Post</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleUpdatePost(formData)
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
        <br />
        <textarea
          type='text'
          name='text'
          value={text}
          placeholder='Text (optional)'
          onChange={handleChange}
        />
        <div className='file-div'>
          <label className='file-label'>
            <input type='file' name='file' onChange={uploadImage} />
            <br />
            <PanoramaIcon /> Upload Image
          </label>
        </div>
        <br />
        <button>Save</button>
      </form>
    </div>
  )
}

export default EditPost
