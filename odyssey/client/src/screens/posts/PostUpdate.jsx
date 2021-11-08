import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme();

export default function PostUpdate({ posts, handlePostUpdate }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: ''
  })
  const { title, content, image_url } = formData
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const currentPost = posts.find(post => post.id === Number(id))
      const { title, content, image_url } = currentPost
      setFormData({
        title: title,
        content: content,
        image_url: image_url
      })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handlePostUpdate(id, formData)
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          
            <div className="comment-update">
              <h1>Add to the Wonder</h1>
              <form className="form-update" onSubmit={handleSubmit}>
                <TextField
                  autoFocus
                  type='text'
                  label='Title'
                  name='title'
                  value={title}
                  onChange={handleChange}
                />
                <br />
                <br />
                <TextField
                  multiline={true}
                    rows={10}
                  type='text'
                  label='Content'
                  name='content'
                  value={content}
                  onChange={handleChange}
                />
                <br />
                <br />
                <TextField
                  type='text'
                  label='Image'
                  name='image_url'
                  value={image_url}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                </form>
          </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
