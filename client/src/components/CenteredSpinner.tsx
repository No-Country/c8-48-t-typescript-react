import { Box, CircularProgress } from '@mui/material';

export default function Spinner() {
  return (
    <Box py={4} display="flex" justifyContent="center" minWidth="100px">
      <CircularProgress />
    </Box>
  );
}
