import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import '../styles/Header.css';

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar className="toolbar">
        <Button color="inherit" onClick={() => scrollToSection('hero')}>Home</Button>
        <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
        <Button color="inherit" onClick={() => scrollToSection('projects')}>Projects</Button>
        <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
