import { Box, styled, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Error50X() {
  return (
    <Container>
      <Content>
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: 'text.black' }} />
        <Title>An error Occurred</Title>
        <Details>Please refresh the page or, if the issue persists, contact an admin</Details>
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
