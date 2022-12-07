import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import logoUni from '../../assets/images/logos/university.png';
import EditIcon from '@mui/icons-material/Edit';
import flag from '../../assets/images/Bandera.png';
export default function SideBar() {
  return (
    <Box sx={{ mr: 3, py: 3, width: '45vh' }}>
      <Box
        sx={{
          width: 250,
          height: 275,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* top  */}
        <Box
          sx={{
            height: 50,
            width: 225,
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            bgcolor: 'rgba(255,255,255,0.5)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 50,
              height: 25,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              objectFit: 'contain',
            }}
            src={flag}
          />
          <EditIcon sx={{ color: 'secondary.dark' }} />
        </Box>
        {/* logo */}
        <CardMedia
          component="img"
          sx={{
            width: 225,
            height: 235,
            bgcolor: 'secondary.main',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            objectFit: 'contain',
          }}
          src={logoUni}
        />
        {/* bottom */}
        <Box
          sx={{
            height: 60,
            width: 225,
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            bgcolor: '#000',
            p: 1,
          }}
        >
          <Typography sx={{ color: '#fff', fontSize: 15 }}>UNIVERSIDAD</Typography>
          <Typography sx={{ color: 'secondary.light', fontSize: 14 }}>NOMBRE</Typography>
        </Box>
      </Box>
      {/* description */}
      <Box sx={{ p: 3 }}>
        <Typography
          sx={{ color: 'secondary.main', fontWeight: 600, fontSize: 20, letterSpacing: 0.8 }}
        >
          Quienes somos?
        </Typography>
        <Typography
          sx={{ color: 'secondary.light', fontWeight: 600, fontSize: 15, letterSpacing: 0.8 }}
        >
          Descripción
        </Typography>
      </Box>
    </Box>
  );
}
