import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

// Import hero image
import HeroImage from '../../assets/Hero/easytaxhero.png';

function Hero() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          mt: '5rem',
          paddingY: { xs: 4, md: 8 },
          backgroundColor: 'white',
        }}
      >
        {/* Left: Image */}
        <Box
          component="img"
          src={HeroImage}
          alt="Office Setup"
          sx={{
            width: { xs: '100%', md: '70%' },
            height: { xs: 'auto', md: '500px' },
            objectFit: 'cover',
          }}
        />

        {/* Right: Text Content */}
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            height: { xs: 'auto', md: '438px' },
            textAlign: { xs: 'center', md: 'left' },
            backgroundColor: '#F8E8EA',
            padding: 4,
            borderRadius: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#A63C58',
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
    </Container>
  );
}

export default Hero;
