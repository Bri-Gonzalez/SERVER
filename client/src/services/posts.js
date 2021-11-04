import api from './api-config'

export const getAllPosts = async () => {
  try {
    const resp = await api.get('/posts')
    return resp.data
  } catch (error) {
    throw error
  }
}

export const getOnePost = async (id) => {
  try {
    const resp = await api.get(`/posts/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const postPost = async (postData) => {
  try {
    const resp = await api.post('/posts', { post: postData })
    return resp.data
  } catch (error) {
    throw error
  }
}

export const putPost = async (id, postData) => {
  try {
    const resp = await api.put(`/posts/${id}`, { post: postData })
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deletePost = async (id) => {
  try {
    const resp = await api.delete(`/posts/${id}`)
    return resp
  } catch (error) {
    throw error
  }
}

export const addCommentToPost = async (commentId, id) => {
  try {
    const resp = await api.put(`/comments/${commentId}/posts/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}