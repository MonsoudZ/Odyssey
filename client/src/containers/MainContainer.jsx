import { useState, useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Home from '../screens/home/home'
import Posts from '../screens/posts/Posts'
import PostCreate from '../screens/posts/PostCreate'
import PostDetail from '../screens/posts/PostDetail'
import PostUpdate from '../screens/posts/PostUpdate'
import CommentCreate from '../screens/comments/CommentCreate'
import CommentUpdate from '../screens/comments/CommentUpdate'
import { makeStyles } from "@material-ui/core/styles";
// import MainFeatured from '../screens/MainFeature';
import {
  getAllPosts,
  getOnePost,
  createPost,
  putPost,
  deletePost,
} from '../services/posts'
import { createComment, putComment } from '../services/comments'

const useStyles = makeStyles((theme) => ({
  MainContainer: {
    height: 300,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/17_tB-oI0ao/6016x4016)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  MainContainer: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));


export default function MainContainer({ currentUser, handleImageUpload }) {
  const [posts, setPosts] = useState([])
  const [latestPosts, setLatestPosts] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchPosts = async () => {
      const postsList = await getAllPosts()
      setPosts(postsList)
      setLatestPosts(postsList.slice(-3))
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    setLatestPosts(posts?.slice(-8))
  }, [posts])

  const handlePostCreate = async formData => {
    const newPost = await createPost(formData)
    setPosts(prevState => [...prevState, newPost])
    history.push('/posts')
  }

  const handlePostUpdate = async (id, formData) => {
    const updatedPost = await putPost(id, formData)
    setPosts(prevState =>
      prevState.map(post => (post.id === Number(id) ? updatedPost : post))
    )
    history.push(`/posts/${id}`)
  }

  const handlePostDelete = async id => {
    await deletePost(id)
    setPosts(prevState => prevState.filter(post => post.id !== Number(id)))
    history.push('/posts')
  }

  const handleCommentCreate = async (post_id, formData) => {
    const newComment = await createComment(post_id, formData)
    const associatedPost = posts.find(post => post.id === Number(post_id))
    associatedPost.comments.push({ id: newComment.id })
    setPosts(prevState =>
      prevState.map(post => {
        return post.id === post_id ? associatedPost : post
      })
    )
    history.push(`/posts/${post_id}`)
  }

  const handleCommentUpdate = async (post_id, comment_id, formData) => {
    await putComment(post_id, comment_id, formData)
    history.push(`/posts/${post_id}`)
  }
// const cards = [1];
  return ( 
    <div>
      <Switch>
      
        <Route path='/posts/:post_id/comments/:id/update'>
          {currentUser ? (
            <CommentUpdate handleCommentUpdate={handleCommentUpdate} />
            ) : (
              <Redirect to='/login' />
          )}
        </Route>
        
        <Route path='/posts/:id/comments/create'>
          {currentUser ? (
            <CommentCreate handleCommentCreate={handleCommentCreate} />
            ) : (
              <Redirect to='/login' />
          )}
        </Route>
        <Route path='/posts/create'>
          {currentUser ? (
            <PostCreate
            handlePostCreate={handlePostCreate}
            handleImageUpload={handleImageUpload}
            />
            ) : (
              <Redirect to='/login' />
          )}
        </Route>
        <Route path='/posts/:id/update'>
          {currentUser ? (
            <PostUpdate posts={posts} handlePostUpdate={handlePostUpdate} />
            ) : (
              <Redirect to='/login' />
          )}
        </Route>
        <Route path='/posts/:id'>
          <PostDetail
            currentUser={currentUser}
            posts={posts}
            setPosts={setPosts}
            handlePostDelete={handlePostDelete}
            />
        </Route>
        <Route path='/posts'>
          <Posts
            currentUser={currentUser}
            posts={posts}
            handlePostDelete={handlePostDelete}
            />
        </Route>
        <Route path='/'>
          <Home currentUser={currentUser} latestPosts={latestPosts} />
        </Route>
      </Switch>
    </div>
          )}
      
    // <Grid container spacing={4}>
    //   {cards.map((card) => (
    //     <Grid item key={card} xs={12} sm={6} md={4}>
    //       <Card
    //         sx={{ height: '100%', display: 'flex', flexDirection: "column" }}
    //       >
    //         <CardMedia
    //           component="img"
    //           sx={{
    //             // 16:9
    //             pt: '56.25%',
    //           }}
    //           image="https://source.unsplash.com/random"
    //           alt="random"
    //         />
    //         <CardContent sx={{ flexGrow: 1 }}>
    //           <Typography gutterBottom variant="h5" component="h2">
    //           </Typography>
    //           <Typography>
    //           <Route path='/'>
    //       <Home currentUser={currentUser} latestPosts={latestPosts} />
    // </Route>
              
    //           </Typography>
    //         </CardContent>
    //         <CardActions>
    //           <Button size="small">View</Button>
    //           <Button size="small">Edit</Button>
    //         </CardActions>
    //       </Card>
    //     </Grid>
    //   ))}

        {/* <Route path='/'>
          <Home currentUser={currentUser} latestPosts={latestPosts} />
    </Route>
         */}
    




