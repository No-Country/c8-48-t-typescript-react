import React from 'react';
import { Box, Typography, Button, CardMedia } from '@mui/material';
export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#220B39',
        width: '100vw',
        height: '550px',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ pt: 24, pl: 20 }}>
        <Typography sx={{ color: 'secondary.main', fontWeight: 700, fontSize: 40 }}>
          ¿Quines Somos?
        </Typography>
        <Typography
          sx={{ color: 'secondary.contrastText', lineHeight: '30px', mt: 1.5, fontSize: 18 }}
        >
          A short description introducing your <br /> business and services to visitors.
        </Typography>
        <Button
          size="small"
          sx={{
            bgcolor: 'secondary.dark',
            borderRadius: '20px',
            width: 170,
            mt: 6,
            '&:hover': { backgroundColor: 'secondary.dark' },
          }}
        >
          Registrarse
        </Button>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image="src\assets\images\deportista.png"
          alt="athlete"
          sx={{
            position: 'absolute',
            height: 550,
            width: 550,
            top: 100,
            right: -700,
            '&:hover': { bg: 'secondary.dark' },
          }}
        />
      </Box>
    </Box>
  );
}
