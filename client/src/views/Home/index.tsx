import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const links = ['/login/universities', '/login/athletes'];
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5">Home view</Typography>
      {links.map((value, i) => (
        <Link to={value} key={`link-${value}-${i}`}>
          <Typography variant="h6">{value}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default Home;
