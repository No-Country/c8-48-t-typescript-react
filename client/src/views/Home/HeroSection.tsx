import AthleteHeroImage from '../../assets/images/athlete-hero.png';
import { Box, Typography, Button, CardMedia } from '@mui/material';

const HeroSection = () => (
  <Box
    sx={{
      bgcolor: '#220B39',
      width: '100vw',
      height: { xl: 650, lg: 550, md: 450, sm: 300, xs: 350 },
      display: 'flex',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        width: { xl: '50%', lg: '50%', md: '50%', sm: '50%', xs: '100%' },
        pl: { xl: 35, lg: 18, md: 12, sm: 3, xs: 6 },
      }}
    >
      <Typography
        sx={{
          color: 'secondary.main',
          fontWeight: 700,
          fontSize: { xl: 50, lg: 40, md: 35, sm: 25, xs: 25 },
        }}
      >
        ¿Quiénes Somos?
      </Typography>
      <Typography
        sx={{
          color: 'secondary.contrastText',
          lineHeight: { lg: '30px', md: '25px', sm: '20px', xs: '18px' },
          mt: 1.5,
          fontSize: { xl: 25, lg: 17, md: 15, sm: 12, xs: 12 },
        }}
      >
        Somos un equipo apasionado por la tecnología <br />
        que aporta un mejor cambio a la realidad <br /> de nuestros usuarios.
      </Typography>
      <Button
        size="small"
        sx={{
          bgcolor: 'secondary.dark',
          borderRadius: '20px',
          fontSize: { xl: 25, lg: 14, md: 14, sm: 14, xs: 13 },
          width: { xl: 275, lg: 170, md: 170, sm: 170, xs: 250 },
          mt: { lg: 6, md: 6, sm: 3, xs: 3 },
          '&:hover': { backgroundColor: 'secondary.dark' },
        }}
      >
        Registrarse
      </Button>
    </Box>
    <Box
      sx={{
        display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' },
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: { xl: '50%', lg: '70%', md: '50%', sm: '50%', xs: 'none' },
      }}
    >
      <CardMedia
        component="img"
        image={AthleteHeroImage}
        alt="athlete"
        sx={{
          height: { xl: 600, lg: 550, md: 450 },
          width: { xl: 600, lg: 550, md: 450 },
          mt: { xl: 25, lg: 25, md: 20, sm: 10 },

          '&:hover': { bg: 'secondary.dark' },
        }}
      />
    </Box>
  </Box>
);

export default HeroSection;
