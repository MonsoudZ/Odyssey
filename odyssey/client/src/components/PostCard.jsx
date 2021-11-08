import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import './PostCard.css'

export default function PostCard({ currentUser, post, handlePostDelete }) {
  const { id } = useParams()

  return (
    
    <div className='post-card'>
      <div className='post-card-user'>
        <h3 className='username'>{post.user?.username}</h3>
      </div>
      <div className='post-card-title'>
        <h5>{post?.title}</h5>
          </div>
        <div>
        <img className='image-preview' src={post?.image_url} />
      </div>
      <h5 className='post-card-content'>{post?.content}</h5>
      <br />
      <br />
      {id ? (
        <>
          <br />
          <br />
          <div>
          </div>
          {currentUser && currentUser.id === post?.user_id ? (
            <div className='post-card-edit-delete'>
              <Link className='post-card-link' to={`/posts/${post.id}/update`}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => handlePostDelete(post.id)}>Delete</Button>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className='post-card-link'>
            <Link className='post-card-link' to={`/posts/${post.id}`}>
              <Button>Setting</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}







