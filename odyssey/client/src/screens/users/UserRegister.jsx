import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
// import { useState } from 'react'
// import { TextField } from '@mui/material'

// export default function UserRegister({ handleRegister, handleImageUpload }) {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     image_url: '',
//     password: '',
//     public_img: '',
//   })
//   const { username, email, image_url, password } = formData

//   const handleChange = e => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     handleRegister(formData)
//   }

//   const handleImage = async e => {
//     const uploaded_url = await handleImageUpload(e.target.files[0])
//     setFormData(prevState => ({
//       ...prevState,
//       image_url: uploaded_url.secure_url,
//       public_img: uploaded_url.public_id,
//     }))
//   }

//   return (
//     <div>
//       <TextField type='file' onChange={handleImage} />
//       <div>
//         <img src={formData.image_url} />
//       </div>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           autoFocus
//           type='text'
//           label='Username'
//           name='username'
//           value={username}
//           onChange={handleChange}
//         />
//         <TextField
//           type='email'
//           label='Email'
//           name='email'
//           value={email}
//           onChange={handleChange}
//         />
//         {/* <TextField
//                 type='text'
//                 label='Image'
//                 name='image_url'
//                 value={image_url}
//                 onChange={handleChange}
//             /> */}
//         <TextField
//           minLength='6'
//           type='password'
//           label='Password'
//           name='password'
//           value={password}
//           onChange={handleChange}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   )