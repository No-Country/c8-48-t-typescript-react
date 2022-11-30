import { Box, CircularProgress } from '@mui/material';

const Spinner = () => (
  <Box py={4} display="flex" justifyContent="center" minWidth="100px">
    <CircularProgress />
  </Box>
);

export default Spinner;
