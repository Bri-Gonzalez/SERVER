import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Link } from 'react-router-dom'
import { useParams } from 'react-router'

import { getAllServers, getOneServer, postServer, putServer, deleteServer, addPostToServer } from '../../services/servers'
import { getAllPosts, getOnePost, postPost, putPost, deletePost, addCommentToPost } from '../../services/posts'
import { getAllComments, getOneComment, postComment, putComment, deleteComment } from '../../services/comments'
import Search from '../../screens/Search/Search'
import Server from '../../screens/Server/Server'


function MainContainer() {
  const [server, setServer] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory()
  const { id } = useParams()

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const postList = await getAllPosts()
  //     setPosts(postList)
  //   }
  //   fetchPosts()
  // }, [])

  useEffect(() => {
    const fetchServer = async () => {
      const server = await getOneServer(id)
      setServer(server)
    }
    fetchServer()
  }, [id])

  console.log(server)


  return (
    <div>
      <Switch>
        <Route path='/server/search'>
          <Search />
        </Route>
        <Route path='/server/:id'>
          <Server />
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
