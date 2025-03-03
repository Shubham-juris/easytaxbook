import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Placeholder for images (replace with actual paths)
import easyTaxLogo from '../../assets/Navbar/easytaxbook.png'; // Update with actual logo path
import HeroImage from '../../assets/Hero/easytaxhero.png'; // Update with actual hero image path

const pages = ['Home', 'About', 'Services', 'About Taxes', 'Contact Us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        paddingY: 1,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo (Centered at the top) */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '10px', // Adjust for vertical positioning
            }}
          >
            <Box component="img" src={easyTaxLogo} alt="Easy Tax Logo" sx={{ height: 70, width: 'auto' }} />
          </Box>

          {/* Navigation Links (Desktop, Centered below logo) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              marginTop: '80px', // Space below the logo
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: 'black',
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': { color: '#A63C58' }, // Maroon hover effect
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Icons (Top-Right) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: '#A63C58' }}> {/* Maroon color for icons */}
              <ShoppingCartIcon />
            </IconButton>
            <IconButton sx={{ color: '#A63C58' }}>
              <AccountCircleIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu (Hamburger) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: '#A63C58' }} // Maroon color for hamburger
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: 'black' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        mt: '5rem', // Margin to account for fixed navbar
        paddingY: { xs: 4, md: 8 },
        backgroundColor: 'white', // White background for the page
      }}
    >
      {/* Left: Image */}
      <Box
        component="img"
        src={HeroImage}
        alt="Office Setup"
        sx={{
          width: { xs: '100%', md: '725px' },
          height: { xs: 'auto', md: '460px' },
          objectFit: 'cover',
        }}
      />

      {/* Right: Text Content with Pink Background */}
      <Box
        sx={{
          width: { xs: '90%', md: '360px' },
          textAlign: { xs: 'center', md: 'left' },
          marginLeft: { md: 4 },
          backgroundColor: '#F8E8EA', // Light pink background matching the image
          padding: 3, // Add padding for spacing
          borderRadius: 1, // Slight rounding for the box
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#A63C58', // Maroon color
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          Welcome
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: '#222',
            fontWeight: '700',
            lineHeight: '1.2',
            marginY: 2,
          }}
        >
          Smart Money Management
        </Typography>

        <Typography variant="body1" sx={{ color: '#555', marginBottom: 3 }}>
          Helping you make informed financial decisions with expert bookkeeping and tax services.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#111', // Black button
            color: '#fff',
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '5px',
            '&:hover': { backgroundColor: '#A63C58' }, // Maroon on hover
          }}
        >
          Contact Us Now
        </Button>
      </Box>
    </Box>
  );
}

function MainComponent() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default MainComponent;