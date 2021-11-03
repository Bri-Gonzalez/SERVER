import api from './api-config'

export const getAllServers = async () => {
  try {
    const resp = await api.get('/servers')
    return resp.data
  } catch (error) {
    throw error
  }
}

export const getOneServer = async (id) => {
  try {
    const resp = await api.get(`/servers/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const postServer = async (serverData) => {
  try {
    const resp = await api.post('/servers', { server: serverData })
    return resp.data
  } catch (error) {
    throw error
  }
}

export const putServer = async (id, serverData) => {
  try {
    const resp = await api.put(`/servers/${id}`, { server: serverData })
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deleteServer = async (id) => {
  try {
    const resp = await api.delete(`/servers/${id}`)
    return resp
  } catch (error) {
    throw error
  }
}

export const addPostToServer = async (postId, id) => {
  try {
    const resp = await api.put(`/posts/${postId}/servers/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}