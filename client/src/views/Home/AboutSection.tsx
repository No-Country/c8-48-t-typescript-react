import StudentImage from '../../assets/images/student.png';
import { Box, CardMedia, Typography } from '@mui/material';

const AboutSection = () => (
  <Box
    sx={{
      display: 'flex',
      height: { xl: 750, lg: 550, md: 450, sm: 350, xs: 375 },
      bgcolor: 'secondary.main',
      flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column' },
    }}
  >
    <Box
      sx={{
        position: 'relative',
        width: '50%',
      }}
    >
      <CardMedia
        component="img"
        image={StudentImage}
        alt="Student"
        sx={{
          position: 'absolute',
          height: { xl: 600, lg: 450, md: 390, sm: 285, xs: 200 },
          width: { xl: 525, lg: 390, md: 350, sm: 250, xs: 175 },
          objectFit: 'cover',
          right: { xl: 0, lg: 0, md: 0, sm: 0, xs: -75 },
          bottom: { xl: 0, lg: 0, md: 0, sm: 0, xs: -375 },
        }}
      />
    </Box>

    <Box
      sx={{
        width: { xl: '50%', lg: '50%', md: '50%', sm: '50%', xs: '100%' },
        position: 'relative',
      }}
    >
      <Typography
        color="primary.main"
        sx={{
          fontWeight: 800,
          fontSize: { xl: 50, lg: 40, md: 35, sm: 25, xs: 25 },
          position: 'absolute',
          left: { xl: 100, lg: 75, md: 50, sm: 40, xs: 55 },
          top: { xl: 175, lg: 125, md: 100, sm: 100, xs: 35 },
        }}
      >
        ¿Que Hacemos?
      </Typography>
      <Typography
        sx={{
          fontSize: { xl: 25, lg: 18, md: 15, sm: 12, xs: 12 },
          position: 'absolute',
          left: { xl: 100, lg: 75, md: 50, sm: 40, xs: 55 },
          top: { xl: 260, lg: 195, md: 160, sm: 140, xs: 75 },
        }}
      >
        Con Nuestra plataforma permitimos a los <br /> jóvenes deportistas mostrar su talento y
        lograr
        <br /> obtener becas universitarias. Sin necesidad <br /> de utilizar distintos puntos de
        contacto.
      </Typography>
    </Box>
  </Box>
);

export default AboutSection;
