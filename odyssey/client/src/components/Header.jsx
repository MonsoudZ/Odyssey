import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/'>Odyssey</Link>
          </Typography>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Post your {' '}
            <Link to='/posts/create'>Adventure</Link>
          </Typography>
        <span>
              <Link className='home-sign-up-link' to='/register'>
                Sign up
              </Link>{' '}
            </span>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}




