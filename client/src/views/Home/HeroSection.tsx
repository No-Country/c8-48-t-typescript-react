import AthleteHeroImage from '../../assets/images/athlete-hero.png';
import { Box, Typography, Button, CardMedia } from '@mui/material';

const HeroSection = () => (
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
        ¿Quiénes Somos?
      </Typography>
      <Typography
        sx={{
          color: 'secondary.contrastText',
          lineHeight: '30px',
          mt: 1.5,
          fontSize: 18,
        }}
      >
        Somos un equipo de personas apasionadas por la tecnología que aporta un mejor cambio a la
        realidad de otras personas.
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
        image={AthleteHeroImage}
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

export default HeroSection;
