import SoccerPlayerImage from '../../assets/images/soccerPlayer.png';
import { Box, Typography, CardMedia } from '@mui/material/';
import Footer from '../Home/Footer';

const FAQ = () => (
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
    <Box sx={{ display: 'flex', bgcolor: 'primary.main', height: 800 }}>
      <Box sx={{ width: '50%', py: 12, px: 15, mt: 3 }}>
        <Typography sx={{ color: 'secondary.main', fontSize: 35, fontWeight: 700, mb: 5 }}>
          Preguntas Frecuentes
        </Typography>
        {/* First question */}
        <Typography
          sx={{
            color: 'secondary.main',
            fontSize: 20,
            mb: 1.5,
            fontWeight: 600,
          }}
        >
          ¿Es seguro el proceso de becas?
        </Typography>
        <Typography sx={{ color: 'secondary.main', fontSize: 15, mb: 10 }}>
          Nuestra plataforma permite solamente a universidades oficiales para que estas propongan
          becas
        </Typography>
        {/* Second question */}
        <Typography
          sx={{
            color: 'secondary.main',
            fontSize: 20,
            mb: 1.5,
            fontWeight: 600,
          }}
        >
          ¿Cuántos deportes cubre becco?
        </Typography>
        <Typography sx={{ color: 'secondary.main', fontSize: 15, mb: 8 }}>
          Cada vez más estamos agregando nuevas disciplinas para que estas sean consideradas en
          becas de universidades
        </Typography>
        {/* Third question */}
        <Typography
          sx={{
            color: 'secondary.main',
            fontSize: 20,
            mb: 1.5,
            fontWeight: 600,
          }}
        >
          ¿Puedo hacer sugerencias a Becco?
        </Typography>
        <Typography sx={{ color: 'secondary.main', fontSize: 15, mb: 3 }}>
          Si gustas darnos sugerencias puedes enviarnos un correo a:{' '}
          <a href="mailto:becco@gmail.com">becco@gmail.com</a>
        </Typography>
      </Box>
      <Box sx={{ width: '50%', height: '100vh', mt: 10 }}>
        <CardMedia
          component="img"
          image={SoccerPlayerImage}
          alt="Soccer player"
          sx={{
            objectFit: 'cover',
            height: 700,
            width: 400,
          }}
        />
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default FAQ;
