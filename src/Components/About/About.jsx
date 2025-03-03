import * as React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

import ComprehensiveImage from '../../assets/About/image.png';
import ExperiencedImage from '../../assets/About/image1.png';
import SimplifiedImage from '../../assets/About/image2.png';

const services = [
  {
    title: 'Comprehensive Accounting Services',
    description:
      'Easytax and Bookkeeping provides comprehensive accounting services to businesses of all sizes, including bookkeeping, tax preparation, payroll processing, and financial statement preparation.',
    image: ComprehensiveImage,
  },
  {
    title: 'Experienced Professionals',
    description:
      'Our team consists of experienced professionals who have worked with businesses in various industries, providing accurate and reliable accounting services with the latest knowledge and tools.',
    image: ExperiencedImage,
  },
  {
    title: 'Simplified Accounting',
    description:
      'We understand that accounting can be overwhelming for many business owners, so we offer simplified solutions with regular reports and updates to keep clients informed.',
    image: SimplifiedImage,
  },
];

function AboutUs() {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            color: '#d32f2f',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 6,
          }}
        >
          ABOUT EASYTAX AND BOOKKEEPING
        </Typography>

        <Grid container spacing={6}>
          {services.map((service, index) => (
            <Grid 
              container 
              item 
              xs={12} 
              md={12} 
              key={index} 
              spacing={4} 
              flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{ color: '#333', fontWeight: 'bold', mb: 2 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  {service.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
