import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import image1 from '../../assets/Gallery/easytaxhero.png';
import image2 from '../../assets/Gallery/image2.png';
import image3 from '../../assets/Gallery/image3.png';
import image4 from '../../assets/Gallery/image4.png';
import image5 from '../../assets/Gallery/image5.png';
import image6 from '../../assets/Gallery/image6.png';
import image7 from '../../assets/Gallery/img.png';
import image8 from '../../assets/Gallery/img1.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ textAlign: 'center', maxWidth: '1120px', margin: 'auto', padding: '20px' }}>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <IconButton 
          onClick={prevImage} 
          sx={{ 
            position: 'absolute', 
            left: 0, 
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' } 
          }}
        >
          <ArrowBack />
        </IconButton>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          style={{ 
            width: '100%', 
            maxHeight: '600px', 
            objectFit: 'cover',        
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
          }} 
        />
        <IconButton 
          onClick={nextImage} 
          sx={{ 
            position: 'absolute', 
            right: 0, 
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' } 
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5px', flexWrap: 'wrap' }}> {/* Reduced gap to 5px */}
        {images.map((img, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{ 
              cursor: 'pointer', 
              border: currentIndex === index ? '3px solid #ff4757' : '3px solid transparent',  
              overflow: 'hidden', 
              transition: 'border 0.3s ease', 
              '&:hover': { border: '3px solid #ff4757' } 
            }}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{ 
                width: '80px', 
                height: '80px', 
                objectFit: 'cover',                 
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;