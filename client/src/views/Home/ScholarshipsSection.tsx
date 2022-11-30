import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';

export default function ScholarshipsSection() {
  return (
    <Box
      sx={{
        height: '1000px',
        bgcolor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 5,
        gap: 3,
      }}
    >
      <Box sx={{ mt: 8, mb: 5, textAlign: 'center' }}>
        <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 700 }}>
          Becas
        </Typography>
        <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 700 }}>
          Disponibles
        </Typography>
      </Box>
      {/* Beca 1 */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          borderRadius: '10px',
          width: '75%',
          display: 'flex',
        }}
      >
        <CardMedia
          component="img"
          image="src\assets\images\logos\university.png"
          alt="athlete"
          sx={{
            height: 200,
            width: 250,
            mx: 4,
          }}
        />
        <Box
          sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography sx={{ fontSize: '25px', fontWeight: 600 }}>
            Defensa central para 2ª division
          </Typography>
          <Typography>Universidad Leiden</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'end', alignItems: 'end' }}>
          <Typography sx={{ m: 3 }}>Hace 3 Días</Typography>
        </Box>
      </Box>
      {/* Beca 2 */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          borderRadius: '10px',
          width: '75%',
          display: 'flex',
        }}
      >
        <CardMedia
          component="img"
          image="src\assets\images\logos\university.png"
          alt="athlete"
          sx={{
            height: 200,
            width: 250,
            mx: 4,
          }}
        />
        <Box
          sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography sx={{ fontSize: '25px', fontWeight: 600 }}>
            Defensa central para 2ª division
          </Typography>
          <Typography>Universidad Leiden</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'end', alignItems: 'end' }}>
          <Typography sx={{ m: 3 }}>Hace 3 Días</Typography>
        </Box>
      </Box>

      {/* Beca 3 */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          borderRadius: '10px',
          width: '75%',
          display: 'flex',
        }}
      >
        <CardMedia
          component="img"
          image="src\assets\images\logos\university.png"
          alt="athlete"
          sx={{
            height: 200,
            width: 250,
            mx: 4,
          }}
        />
        <Box
          sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography sx={{ fontSize: '25px', fontWeight: 600 }}>
            Defensa central para 3ª division
          </Typography>
          <Typography>Universidad Leiden</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'end', alignItems: 'end' }}>
          <Typography sx={{ m: 3 }}>Hace 3 Días</Typography>
        </Box>
      </Box>
    </Box>
  );
}
