import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



const Header = ({props}) => {



    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
              
            </IconButton>
            
            <Link className='text-white p-3 text-decoration-none fw-bold' color="inherit" to="/homes">Home</Link>
            <Link className='text-white p-3 text-decoration-none fw-bold' color="inherit" to="/login">Login</Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;