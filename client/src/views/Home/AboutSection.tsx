import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <Box sx={{ display: 'flex', height: 550 }}>
      <Box sx={{ position: 'relative', width: '50%' }}>
        <CardMedia
          component="img"
          image="src\assets\images\student.png"
          alt="athlete"
          sx={{
            position: 'absolute',
            height: 450,
            width: 392,
            objectFit: 'cover',
            right: 0,
            bottom: 0,
          }}
        />
      </Box>

      <Box sx={{ width: '50%', position: 'relative' }}>
        <Typography
          color="primary.main"
          sx={{ fontWeight: 800, fontSize: '30px', position: 'absolute', left: 50, top: 175 }}
        >
          ¿Que Hacemos?
        </Typography>
        <Typography sx={{ position: 'absolute', left: 50, top: 225 }}>
          A short description introducing your <br /> business and services to visitors.{' '}
        </Typography>
      </Box>
    </Box>
  );
}
