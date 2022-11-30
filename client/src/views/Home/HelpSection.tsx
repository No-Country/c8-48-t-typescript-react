import SoccerPlayerImage from '../../assets/images/soccerPlayer.png';
import { Box, CardMedia, Typography } from '@mui/material';

const HelpSection = () => (
  <Box sx={{ display: 'flex', bgcolor: 'primary.main', height: 800 }}>
    <Box sx={{ width: '50%', py: 12, px: 15, mt: 3 }}>
      <Typography sx={{ color: 'secondary.main', fontSize: 35, fontWeight: 700, mb: 5 }}>
        Preguntas Frecuentes
      </Typography>
      {/* First question */}
      <Typography sx={{ color: 'secondary.main', fontSize: 20, mb: 1.5, fontWeight: 600 }}>
        ¿Get In Touch lorem ipsum ?
      </Typography>
      <Typography sx={{ color: 'secondary.main', fontSize: 15, mb: 10 }}>
        It is a long established fact that a reader <br /> will be distracted by the readable
        content <br />
        of a page when looking at its layout.
      </Typography>
      {/* Second question */}
      <Typography sx={{ color: 'secondary.main', fontSize: 20, mb: 1.5, fontWeight: 600 }}>
        ¿Get In Touch lorem ipsum ?
      </Typography>
      <Typography sx={{ color: 'secondary.main', fontSize: 15, mb: 8 }}>
        It is a long established fact that a reader <br /> will be distracted by the readable
        content <br />
        of a page when looking at its layout.
      </Typography>
      {/* Third question */}
      <Typography sx={{ color: 'secondary.main', fontSize: 20, mb: 1.5, fontWeight: 600 }}>
        ¿Get In Touch lorem ipsum ?
      </Typography>
      <Typography sx={{ color: 'secondary.main', fontSize: 15, mb: 3 }}>
        It is a long established fact that a reader <br /> will be distracted by the readable
        content <br />
        of a page when looking at its layout.
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
);

export default HelpSection;
