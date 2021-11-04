import { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { getAllServers, getOneServer, postServer, putServer, deleteServer, addPostToServer } from '../../services/servers'
import { getAllPosts, getOnePost, postPost, putPost, deletePost, addCommentToPost } from '../../services/posts'
import { getAllComments, getOneComment, postComment, putComment, deleteComment } from '../../services/comments'
import Search from '../../screens/Search/Search'
import Server from '../../screens/Server/Server'
import Comments from '../../screens/Comments/Comments'


function MainContainer() {

  return (
    <div>
      <Switch>
        <Route path='/server/:id/posts/:id'>
          <Comments/>
        </Route>
        <Route path='/server/search'>
          <Search />
        </Route>
        <Route path='/server/:id'>
          <Server/>
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
