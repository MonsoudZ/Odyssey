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




// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Header.css'
// import Logo from '../assets/logo.png'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'
// import { Button, Menu, MenuItem } from '@mui/material'

// export default function Header({ currentUser, handleLogout }) {
//   const [toggle, setToggle] = useState(null)
//   const open = Boolean(toggle)
//   const handleClick = e => {
//     setToggle(e.currentTarget)
//   }

//   const handleClose = () => {
//     setToggle(null)
//   }

//   return (
//     <header className='header'>
//       <div>
//         <div className='header-hamburger-button'>
//           <Button
//             id='menu-button'
//             aria-controls='nav-menu'
//             aria-haspopup='true'
//             aria-expanded={open ? 'true' : undefined}
//             sx={{ p: 0 }}
//             onClick={handleClick}
//           >
//             {toggle === null ? (
//               <MenuIcon sx={{ fontSize: 40, p: 0 }} />
//             ) : (
//               <CloseIcon sx={{ fontSize: 40, p: 0 }} />
//             )}
//           </Button>
//         </div>
//         <Menu
//           id='nav-menu'
//           anchorEl={toggle}
//           open={open}
//           onClose={handleClose}
//           transitionDuration={600}
//         >
//           {currentUser ? (
//             <div>
//               <MenuItem>
//                 <p className='welcome-user-message'>
//                   Welcome {currentUser.username}
//                 </p>
//               </MenuItem>
//             </div>
//           ) : (
//             <MenuItem>
//               <Link className='header-navlink' to='/login'>
//                 <Button onClick={handleClose}>Login/Register</Button>
//               </Link>
//             </MenuItem>
//           )}
//           <MenuItem>
//             <Link className='header-navlink' to='/posts'>
//               <Button onClick={handleClose}>Posts</Button>
//             </Link>
//           </MenuItem>
//           {currentUser ? (
//             <>
//               <MenuItem>
//                 <Link className='header-navlink' to='/posts/create'>
//                   <Button onClick={handleClose}>Create</Button>
//                 </Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link className='header-navlink' to='/update'>
//                   <Button onClick={handleClose}>Update User Info</Button>
//                 </Link>
//               </MenuItem>
//               <MenuItem>
//                 <Button onClick={handleLogout}>Logout</Button>
//               </MenuItem>
//             </>
//           ) : null}
//         </Menu>
//       </div>
//       <Link to='/'>
//         <img className='logo' src={Logo} alt='hubbub-logo' />
//       </Link>
//     </header>
//   )
// }