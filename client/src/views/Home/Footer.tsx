import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const navigation = ['Home', 'Becas', 'Planes', 'Ayuda'];
  const titleStyle = { fontWeight: 600, fontSize: { xl: 26, lg: 18, sm: 15 }, mb: 2 };

  return (
    <Box
      sx={{
        bgcolor: 'white',
        display: 'flex',
        flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'row', xs: 'column' },
        height: { xl: '400px', lg: '350px' },
        alignItems: 'start',
        width: '100vw',
        py: 9,
      }}
    >
      {/* Social media */}
      <Box
        sx={{
          width: { xl: '40%', lg: '40%', md: '40%', sm: '40%', xs: '95%' },
          px: { xl: 10, lg: 10, md: 7, sm: 5, xs: 5 },
        }}
      >
        <Typography sx={titleStyle}>Redes Sociales</Typography>
        <Typography sx={{ mb: 2, fontSize: { xl: 20, lg: 16, md: 12, sm: 12, xs: 12 } }}>
          Para mantenerte al tanto de la plataforma <br /> y conocer mas de nosotros.
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: { xl: 'start', lg: 'start', md: 'start', sm: 'start', xs: 'flex-end' },
          }}
        >
          <IconButton color="primary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary">
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
      {/* Navigation */}
      <Box
        sx={{
          display: { xl: 'flex', lg: 'flex', md: 'flex', sx: 'flex', xs: 'none' },
          flexDirection: 'column',
        }}
      >
        <Typography sx={titleStyle}>Navegación</Typography>
        <Stack direction="column" spacing={0.5}>
          {navigation.map((link, id) => {
            return (
              <Link
                sx={{ fontSize: { xl: 20, lg: 16, md: 12, sm: 12 } }}
                key={`nav-link-${id}`}
                href={link === 'Home' ? '/' : link.toLowerCase()}
              >
                {link}
              </Link>
            );
          })}
        </Stack>
      </Box>
      {/* Contacto */}
      <Box sx={{ px: { xl: 10, lg: 10, md: 7, sm: 5, xs: 5 } }}>
        <Box sx={{ width: '100%', top: -85 }}>
          <Typography sx={titleStyle}>Contacto</Typography>
          <Typography
            sx={{ lineHeight: 1.5, fontSize: { xl: 20, lg: 16, md: 12, sm: 12, xs: 12 } }}
          >
            Email: Becco@gmail.com <br /> Phone: 123-456-7890
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
