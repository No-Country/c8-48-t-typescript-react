import React from 'react';
import { Box, Typography, Button } from '@mui/material';
export default function PackagesSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.main',
        height: '700px',
      }}
    >
      <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 700, mb: 10 }}>
        Nuestros Planes{' '}
      </Typography>

      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {/* Basic */}
        <Box sx={packageCardStyle}>
          <Typography sx={titleStyle}>Gold</Typography>
          <Typography sx={listTextStyle}>
            <li>Página de perfil</li>
            <li>Solicita ofertas Basic</li>
            <li>Descuento en cursos</li>
          </Typography>
          <Button size="small" sx={buttonStyle}>
            Seleccionar
          </Button>
        </Box>
        {/* Gold */}
        <Box sx={packageBiggerCardStyle}>
          <Typography sx={titleStyle}>Básico</Typography>
          <Typography sx={listTextStyle}>
            <li>Página de perfil (Hasta 10 CVs)</li>
            <li>Solicita ofertas Premium</li>
            <li>Descuento en cursos</li>
            <li>Notificaciones en WhatsApp</li>
            <li>Contacto con otros perfiles</li>
          </Typography>
          <Button size="small" sx={buttonStyle}>
            Seleccionar
          </Button>
        </Box>
        {/* Pro */}
        <Box sx={packageCardStyle}>
          <Typography sx={{ fontSize: 25, fontWeight: 600, mb: 2 }}>Pro</Typography>
          <Typography sx={listTextStyle}>
            <li>Página de perfil destacado</li>
            <li>Solicita ofertas Premium</li>
            <li>Descuento en cursos</li>
            <li>Notificaciones en WhatsApp</li>
          </Typography>
          <Button
            size="small"
            sx={{ bgcolor: 'secondary.dark', borderRadius: 10, width: '100%', mt: 5 }}
          >
            Seleccionar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const packageCardStyle = {
  width: 325,
  height: 450,
  bgcolor: 'primary.contrastText',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  py: 8,
  px: 5,
};

const packageBiggerCardStyle = {
  width: 350,
  height: 500,
  bgcolor: 'primary.contrastText',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  py: 8,
  px: 5,
};

const listTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  lineHeight: 2.5,
};

const buttonStyle = { bgcolor: 'secondary.dark', borderRadius: 10, width: '100%', mt: 7 };
const titleStyle = { fontSize: 25, fontWeight: 600, mb: 5 };
