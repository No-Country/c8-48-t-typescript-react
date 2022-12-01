import { Typography } from '@mui/material';

const ErrorMessage = ({ message }: { message: string }) => (
  <Typography variant="fetchError" color="error.dark">
    <Typography display="inline" fontWeight="bold">
      Oops!
    </Typography>
    {message}
  </Typography>
);

export default ErrorMessage;
