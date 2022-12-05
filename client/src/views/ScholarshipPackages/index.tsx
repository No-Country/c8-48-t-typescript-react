import { Box, Typography, Button } from '@mui/material/';
import Footer from '../Home/Footer';
import Slider from './Slider';

const ScholarshipPackages = () => {
  return (
    <Box>
      {/* xl, lg and md size */}
      <Box
        sx={{
          display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'primary.main',
          height: { xl: 1000, lg: 650, md: 650, sm: 600, xs: 500 },
        }}
      >
        <Typography
          variant="h4"
          color="secondary.main"
          sx={{ fontSize: { xl: 50, lg: 40, md: 35, sm: 25, xs: 20 }, fontWeight: 700, mb: 6 }}
        >
          Nuestros Planes
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {/* Basic */}
          <Box sx={packageCardStyle}>
            <Typography sx={titleStyle}>Básico</Typography>
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
            <Typography sx={titleStyle}>Gold</Typography>
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
            <Typography
              sx={{ fontSize: { xl: 35, lg: 25, md: 20, sm: 25, xs: 20 }, fontWeight: 600, mb: 2 }}
            >
              Pro
            </Typography>
            <Typography sx={listTextStyle}>
              <li>Página de perfil destacado</li>
              <li>Solicita ofertas Premium</li>
              <li>Descuento en cursos</li>
              <li>Notificaciones en WhatsApp</li>
            </Typography>
            <Button
              size="small"
              sx={{
                bgcolor: 'secondary.dark',
                borderRadius: 10,
                width: '80%',
                mt: 5,
                fontSize: { xl: 25, lg: 16, md: 15, sm: 18, xs: 20 },
              }}
            >
              Seleccionar
            </Button>
          </Box>
        </Box>
      </Box>
      {/* sm and xs Size */}
      <Box sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
        <Slider slides={cardSlides} />
      </Box>
      <Footer />
    </Box>
  );
};

export default ScholarshipPackages;

const packageCardStyle = {
  width: { xl: 375, lg: 290, md: 250, sm: 275, xs: 235 },
  height: { xl: 450, lg: 425, md: 400, sm: 350, xs: 350 },
  bgcolor: 'primary.contrastText',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  py: 8,
  px: { xl: 3, lg: 1, md: 4, sm: 1, xs: 3 },
};

const packageBiggerCardStyle = {
  width: { xl: 400, lg: 350, md: 275, sm: 275, xs: 350 },
  height: { xl: 525, lg: 450, md: 450, sm: 375, xs: 350 },
  bgcolor: 'primary.contrastText',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  py: 8,
  px: { xl: 5, lg: 5, md: 4, sm: 1, xs: 3 },
};

const listTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  lineHeight: 2.5,
  fontSize: { xl: 20, lg: 15, md: 13, sm: 12, xs: 13 },
};

const buttonStyle = {
  bgcolor: 'secondary.dark',
  borderRadius: 10,
  width: '80%',
  mt: 7,
  fontSize: { xl: 25, lg: 16, md: 15, sm: 15, xs: 15 },
};
const titleStyle = { fontSize: { xl: 35, lg: 25, md: 20, sm: 20, xs: 22 }, fontWeight: 600, mb: 5 };
// display: { xl: 'none', lg: 'none', md: 'none', sm: 'flex', xs: 'flex' }

// cards to slide
const cardSlides = [
  <Box sx={packageCardStyle}>
    <Typography sx={titleStyle}>Básico</Typography>
    <Typography sx={listTextStyle}>
      <li>Página de perfil</li>
      <li>Solicita ofertas Basic</li>
      <li>Descuento en cursos</li>
    </Typography>
    <Button size="small" sx={buttonStyle}>
      Seleccionar
    </Button>
  </Box>,
  <Box sx={packageCardStyle}>
    <Typography sx={{ fontSize: { sm: 20, xs: 22 }, fontWeight: 600, mb: 2 }}>Gold</Typography>
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        lineHeight: 2,
        fontSize: { xl: 20, lg: 17, md: 13, sm: 12, xs: 13 },
      }}
    >
      <li>Página de perfil</li>
      <li>Solicita ofertas Premium</li>
      <li>Descuento en cursos</li>
      <li>Notificaciones en WhatsApp</li>
      <li>Contacto con otros perfiles</li>
    </Typography>
    <Button size="small" sx={buttonStyle}>
      Seleccionar
    </Button>
  </Box>,
  <Box sx={packageCardStyle}>
    <Typography sx={titleStyle}>Pro</Typography>
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        lineHeight: 2,
        fontSize: { xl: 20, lg: 17, md: 13, sm: 12, xs: 13 },
      }}
    >
      <li>Página de perfil destacado</li>
      <li>Solicita ofertas Premium</li>
      <li>Descuento en cursos</li>
      <li>Notificaciones en WhatsApp</li>
    </Typography>
    <Button size="small" sx={buttonStyle}>
      Seleccionar
    </Button>
  </Box>,
];
