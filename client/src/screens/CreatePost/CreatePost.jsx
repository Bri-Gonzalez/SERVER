import './CreatePost.css'
import { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { postPost } from '../../services/posts'
//CLOUDINARY_URL=cloudinary://651251922364575:Ab0ee2RgtOR18NeDCM1rK3PZN5w@dfryxohde
//https://api.cloudinary.com/v1_1/dfryxohde

function CreatePost() {
  const { server_id } = useParams()
  const [isCreated, setCreated] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: '',
    server_id: Number(server_id),
  })

  const { title, text, image } = formData

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

  if (isCreated) {
    return <Redirect to={`/server/${server_id}`} />
  }

  //I used a video by Coding Shiksha to help me write the code for uploading images
  //and tweaked the code to fit my project.
  //https://www.youtube.com/watch?v=cc0oMYaduuA
  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'Server')
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dfryxohde/image/upload',
      data
    )
    props.setImage(res.data.url)
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
            type='text'
            name='image'
            value={image}
            onChange={handleChange}
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
