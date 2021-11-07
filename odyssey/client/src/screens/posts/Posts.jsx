import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../../components/PostCard'


export default function Posts({ currentUser, posts, handlePostDelete }) {
    if (!posts.length) return <h3>We trying over here</h3>
    
    return (
        <div>
            
                {posts?.map((post, index) => (
                    <div key={index}>
                        <PostCard
                            currentUser={currentUser}
                            post={post}
                            handlePostDelete={handlePostDelete}
                        />
                    </div>
                ))}
        </div>
    )
}