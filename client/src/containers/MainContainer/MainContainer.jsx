import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Link } from 'react-router-dom'

import { getAllServers, getOneServer, postServer, putServer, deleteServer, addPostToServer } from '../../services/servers'
import { getAllPosts, getOnePost, postPost, putPost, deletePost, addCommentToPost } from '../../services/posts'
import { getAllComments, getOneComment, postComment, putComment, deleteComment } from '../../services/comments'
import Search from '../../screens/Search/Search'


function MainContainer() {
  const [servers, setServers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])


  return (
    <div>
      <Switch>
        <Route path='/server/search'>
          <Search />
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
