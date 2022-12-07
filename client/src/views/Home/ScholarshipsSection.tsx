import UniversityLogo from '../../assets/images/logos/university.png';
import { Box, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
const ScholarshipsSection = () => (
  <Box
    sx={{
      height: { xl: '1000px', lg: '1000px', md: '1000px', sm: '800px', xs: '700px' },
      bgcolor: 'primary.main',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: 5,
      gap: 3,
    }}
  >
    <Box sx={{ mt: 8, mb: 5, textAlign: 'center' }}>
      <Typography
        variant="h4"
        color="secondary.main"
        sx={{ fontWeight: 700, fontSize: { xl: 50, lg: 40, md: 35, sm: 30, xs: 22 } }}
      >
        Becas
      </Typography>
      <Typography
        variant="h4"
        color="secondary.main"
        sx={{ fontWeight: 700, fontSize: { xl: 50, lg: 40, md: 35, sm: 30, xs: 22 } }}
      >
        Disponibles
      </Typography>
    </Box>
    {/* Scholarships */}
    <Box
      sx={{
        bgcolor: 'secondary.main',
        borderRadius: '10px',
        width: { xl: '75%', lg: '75%', md: '78%', sm: '88%', xs: '95%' },
        display: 'flex',
      }}
    >
      <CardMedia
        component="img"
        image={UniversityLogo}
        alt="University"
        sx={{
          height: { xl: 200, lg: 200, md: 175, sm: 150, xs: 100 },
          width: { xl: 200, lg: 200, md: 175, sm: 150, xs: 100 },
          mx: { xl: 4, lg: 4, md: 4, sm: 2, xs: 1 },
        }}
      />
      <Box
        sx={{ width: '48%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <Typography sx={{ fontSize: { xl: 30, lg: 25, md: 18, sm: 15, xs: 12 }, fontWeight: 600 }}>
          Defensa central para 2ª division
        </Typography>
        <Typography sx={{ fontSize: { xl: 25, lg: 20, md: 15, sm: 12, xs: 11 } }}>
          Universidad Leiden
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'end', alignItems: 'end' }}>
        <Typography
          sx={{
            m: { xl: 3, lg: 3, md: 1, sm: 1, xs: 0.5 },
            fontSize: { xl: 18, lg: 15, md: 12, sm: 12, xs: 9 },
            textAlign: 'center',
          }}
        >
          Hace 3 Días
        </Typography>
      </Box>
    </Box>

    {/* see more button */}
    <Link
      style={{ color: 'white', fontSize: 18, textDecoration: 'none', fontWeight: 600 }}
      to="auth/login/athlete"
    >
      Ver mas
    </Link>
  </Box>
);

export default ScholarshipsSection;
