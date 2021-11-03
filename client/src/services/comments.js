import api from './api-config'

export const getAllComments = async () => {
  try {
    const resp = await api.get('/comments')
    return resp.data
  } catch (error) {
    throw error
  }
}

export const getOneComment = async (id) => {
  try {
    const resp = await api.get(`/comments/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const postComment = async (commentData) => {
  try {
    const resp = await api.post('/comments', { comment: commentData })
    return resp.data
  } catch (error) {
    throw error
  }
}

export const putComment = async (id, commentData) => {
  try {
    const resp = await api.put(`/comments/${id}`, { comment: commentData })
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deleteComment = async (id) => {
  try {
    const resp = await api.delete(`/comments/${id}`)
    return resp
  } catch (error) {
    throw error
  }
}