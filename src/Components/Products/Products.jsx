import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';

import NewProductsImage from '../../assets/Products/image1.png';
import MostPopularImage from '../../assets/Products/image2.png';
import BestValueImage from '../../assets/Products/image3.png';

function ProductCards() {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: 'calc(33.33% - 32px)' },
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box
              component="img"
              src={NewProductsImage}
              alt="New Products"
              sx={{
                width: '100%',
                height: 420,
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              New Products
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: 'calc(33.33% - 32px)' },
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box
              component="img"
              src={MostPopularImage}
              alt="Most Popular"
              sx={{
                width: '100%',
                height: 420,
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              Most Popular
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: 'calc(33.33% - 32px)' },
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box
              component="img"
              src={BestValueImage}
              alt="Best Value"
              sx={{
                width: '100%',
                height: 420,
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h4"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              Best Value
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ProductCards;