import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import HeroImage from '../../assets/Hero/easytaxhero.png'; // Change this to your actual image

function Hero() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
        backgroundColor: '#FBEFF2', // Soft pink background
        paddingY: { xs: 4, md: 8 },
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

      {/* Right: Text Content */}
      <Box
        sx={{
          width: { xs: '90%', md: '360px' },
          textAlign: { xs: 'center', md: 'left' },
          marginLeft: { md: 4 },
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: '#A63C58', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}
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
            backgroundColor: '#111',
            color: '#fff',
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '5px',
            '&:hover': { backgroundColor: '#A63C58' },
          }}
        >
          Contact Us Now
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
