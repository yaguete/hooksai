import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Fade from '@mui/material/Fade';
import './navbar.css';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/LogoHooks.png';

function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <AppBar className="Navbar" 
    sx={{ boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Logo y nombre */}
        <Box display="flex" alignItems="flex" flexGrow={1}>
          <img
            src={logo}
            alt="LogoHooks"
            style={{ width: 40, marginRight: 10 }}
          />
          <Typography variant="h6" color="textPrimary" sx={{fontWeight: 300}}>
            HooksAI
          </Typography>
        </Box>

       {/* Botones de navegación */}
       <Box display={{ xs: 'none', sm: 'flex' }} 
            className="navbar-buttons-container" 
            gap={1}>
          
          <NavLink to="/" className={({isActive}) => 
            isActive ? "navbar-button" : "navbar-button text"}>
              Home
          </NavLink>
          <NavLink to="/pricing" className={({isActive}) => 
            isActive ? "navbar-button" : "navbar-button text"}>
              Pricing
          </NavLink>
          <NavLink to="/faq" className={({isActive}) => 
            isActive ? "navbar-button" : "navbar-button text"}>
              FAQ
          </NavLink>
          
        </Box>

        {/* Botón de menú hamburguesa (solo en móvil) */}
        
        <IconButton
          color="inherit"
          aria-label={mobileOpen ? 'close drawer' : 'open drawer'}
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Botones flotantes usando Fade */}
      <Fade in={mobileOpen} timeout={500}>
        <Box
          sx={{
            position: 'absolute',
            top: '50px', // Comienza justo debajo del Navbar
            right: 0,
            padding: 2,
            backgroundColor: 'transparent', // Fondo transparente
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end', // Alinear a la derecha
            gap: 2,
          }}
        >
          <NavLink to="/" className={({isActive}) => 
            isActive ? "navbar-button-drawer text" : "navbar-button-drawer"}>
              Home
          </NavLink>
          <NavLink to="/pricing" className={({isActive}) => 
            isActive ? "navbar-button-drawer text" : "navbar-button-drawer"}>
              Pricing
          </NavLink>
          <NavLink to="/faq" className={({isActive}) => 
            isActive ? "navbar-button-drawer text" : "navbar-button-drawer"}>
              FAQ
          </NavLink>
        </Box>
      </Fade>
    </AppBar>
  );
}

export default Navbar;