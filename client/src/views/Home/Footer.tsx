import React from 'react';
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  const navigation = ['Home', 'Acerca de nosotros', 'Becas', 'Planes', 'Ayuda'];
  const titleStyle = { fontWeight: 600, fontSize: '18px', mb: 2 };
  return (
    <Box sx={{ display: 'flex', height: '300px', alignItems: 'center' }}>
      {/* Social media */}
      <Box sx={{ width: '36%', py: 5, px: 10 }}>
        <Typography sx={titleStyle}>Redes Sociales</Typography>
        <Typography sx={{ mb: 2 }}>
          Summarize your business so the visitor can <br /> learn about your offerings from any page{' '}
          <br /> on your website.
        </Typography>
        <Stack direction="row" spacing={1}>
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
      <Box>
        <Typography sx={titleStyle}>Navegación</Typography>
        <Stack direction="column" spacing={0.5}>
          {navigation.map((nav) => {
            return <Link>{nav}</Link>;
          })}
        </Stack>
      </Box>
      {/* Contacto */}
      <Box sx={{ px: 12, position: 'relative' }}>
        <Box sx={{ position: 'absolute', width: '100%', top: -85 }}>
          <Typography sx={titleStyle}>Contacto</Typography>
          <Typography sx={{ lineHeight: 2 }}>
            Email: Contact@Mysite.com <br /> Phone: 123-456-7890
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
