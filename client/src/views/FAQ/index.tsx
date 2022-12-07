import SoccerPlayerImage from '../../assets/images/soccerPlayer.png';
import { Box, Typography, CardMedia } from '@mui/material/';
import Footer from '../Home/Footer';

const FAQ = () => (
  <Box
    sx={{
      height: { xl: 1000 },
      bgcolor: 'primary.main',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: 5,
      gap: 3,
    }}
  >
    <Box sx={{ display: 'flex', bgcolor: 'primary.main', width: '100%' }}>
      <Box
        sx={{
          width: { xl: '55%', lg: '55%', md: '55%', sm: '55%', xs: '100%' },
          py: { xl: 12, lg: 12, md: 10, sm: 8, xs: 2 },
          pl: { xl: 35, lg: 25, md: 12, sm: 5, xs: 2 },
        }}
      >
        <Typography sx={mainTitle}>Preguntas Frecuentes</Typography>
        {/* First question */}
        <Typography sx={titleStyle}>¿Es seguro el proceso de becas?</Typography>
        <Typography sx={paragraphStyle}>
          Nuestra plataforma permite solamente a <br />
          universidades oficiales para que estas <br /> propongan becas
        </Typography>
        {/* Second question */}
        <Typography sx={titleStyle}>¿Cuántos deportes cubre Becco?</Typography>
        <Typography sx={paragraphStyle}>
          Cada vez más estamos agregando nuevas <br />
          disciplinas para que estas sean consideradas
          <br /> en becas de universidades
        </Typography>
        {/* Third question */}
        <Typography sx={titleStyle}>¿Puedo hacer sugerencias a Becco?</Typography>
        <Typography sx={paragraphStyle}>
          Si gustas darnos sugerencias puedes <br />
          enviarnos un correo a : becco@gmail.com
        </Typography>
      </Box>
      <Box
        sx={{
          width: '40%',
          height: '100vh',
          mt: 10,
          display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' },
          justifyContent: 'start',
        }}
      >
        <CardMedia
          component="img"
          image={SoccerPlayerImage}
          alt="Soccer player"
          sx={{
            objectFit: 'cover',
            height: { xl: 900, lg: 600, md: 600, sm: 520 },
            width: { xl: 600, lg: 375, md: 550, sm: 400 },
          }}
        />
      </Box>
    </Box>

    <Footer />
  </Box>
);

export default FAQ;
const mainTitle = {
  color: 'secondary.main',
  fontSize: { xl: 55, lg: 40, md: 35, sm: 25, xs: 22 },
  fontWeight: 700,
  mb: 5,
};
const titleStyle = {
  color: 'secondary.main',
  fontSize: { xl: 30, lg: 20, md: 20, sm: 15 },
  mb: 1.5,
  fontWeight: 600,
};
const paragraphStyle = {
  color: 'secondary.light',
  fontSize: { xl: 25, lg: 20, md: 18, sm: 13, xs: 13 },
  mb: 10,
};
