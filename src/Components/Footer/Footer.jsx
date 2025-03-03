import * as React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

function OnlineAppointments() {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 6 }}>
      <Container maxWidth="md">
        <Typography
          variant="body1"
          sx={{
            color: '#b71c1c',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'left',
            mb: 2,
            letterSpacing: 1,
          }}
        >
          ONLINE APPOINTMENTS
        </Typography>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#fdeff2',
            padding: 2,
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
            New services are coming soon!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

function ClientReviews() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/assets/reviews-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: 10,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          See What Our Clients Have to Say
        </Typography>
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'inline-block',
            px: 3,
            py: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="body1">Reviews coming soon!</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default function AppointmentsAndReviews() {
  return (
    <>
      <OnlineAppointments />
      <ClientReviews />
    </>
  );
}
