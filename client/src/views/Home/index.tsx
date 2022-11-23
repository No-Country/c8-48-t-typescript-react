import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const links = ['/login/universities', '/login/athletes'];
  return (
    <>
      <Typography variant="h5">Home view</Typography>
      {links.map((value) => (
        <Link to={value}>
          <Typography variant="h6">{value}</Typography>
        </Link>
      ))}
    </>
  );
};

export default Home;
