import { Typography } from '@mui/material';

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <Typography variant="fetchError" color="error.dark">
      <Typography display="inline" fontWeight="bold">
        Oops!
      </Typography>
      {message}
    </Typography>
  );
}
