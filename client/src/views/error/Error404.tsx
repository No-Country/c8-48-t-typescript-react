import { Box, styled, Typography } from '@mui/material';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

export default function Error404() {
  return (
    <Container>
      <Content>
        <NotListedLocationIcon sx={{ fontSize: 80, color: 'text.black' }} />
        <Title>Page not Found</Title>
        <Details>The page you’re looking for no longer exists.</Details>
        {/* <img src={Logo} alt="" width={250} /> */}
      </Content>
    </Container>
  );
}

const Container = styled(Box)({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Title = styled(Typography)({
  fontSize: 36,
  fontWeight: 700,
});

const Details = styled(Typography)({
  fontSize: 20,
  fontWeight: 400,
  marginBottom: 190,
});
