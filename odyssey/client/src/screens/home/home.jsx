import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'
import './home.css'

export default function Home({ currentUser, latestPosts, handlePostDelete }) {
  return (
    <div>
      {currentUser ? (
        <>
          <h1 className ="home-helper-text">Explore {currentUser.username}!</h1>
          <br />
        </>
      ) : (
        <>
          <h1 className='home-welcome-message'>The adventure awaits</h1>
          <br />
        </>
      )}
      <br />
      <br />
      <div>
        <div className='home-latest-post-container'>
          {latestPosts.map(latestPost => (
            <div key={latestPost.id} className='home-latest-post-container'>
              <PostCard
                currentUser={currentUser}
                post={latestPost}
                handlePostDelete={handlePostDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}