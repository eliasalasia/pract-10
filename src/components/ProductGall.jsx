import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';

const images = [
  '/image-product-1.jpg',
  '/image-product-2.jpg',
  '/image-product-3.jpg',
  '/image-product-4.jpg',
];

const ProductoGall = () => {
  const [imagenPrincipal, setImagenPrincipal] = useState(images[0]); 
  const cambiarImagenPrincipal = (image) => {
    setImagenPrincipal(image);
  };

  return (
    <Box>
      <Paper elevation={3} style={{ borderRadius: '16px', overflow: 'hidden' }}>
        <img src={imagenPrincipal} alt="Main Product" style={{ width: '100%' }} />
      </Paper>
      <Grid container spacing={2} mt={2}>
        {images.map((image, index) => (
          <Grid item xs={3} key={index}>
            <Paper
              elevation={3}
              style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => cambiarImagenPrincipal(image)}
            >
              <img src={image} alt={`Product ${index + 1}`} style={{ width: '100%' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductoGall;