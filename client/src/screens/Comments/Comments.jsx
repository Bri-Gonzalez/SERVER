import './Comments.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {getOnePost} from '../../services/posts'
import { getAllComments } from '../../services/comments'


function Comments() {
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments()
      const postComments = commentList.filter((comment) => comment.post_id === Number(id))
      setComments(postComments)
    }
    fetchComments()
  }, [])

  return (
    <div>
      <div>
        <p>{post?.user?.username}</p>
        <p>{post.title}</p>
        {post.image ? <img src={post.image} alt={post.title} /> : ''}
        {post.text ? <p>{post.text}</p> : ''}
      </div>
      <div>
        <form>
          <textarea
            placeholder='Add a comment'
            name='comment'
            required
            autoFocus
          />
          <br/ >
          <button>+ add comment</button>
        </form>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.user.username}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments
