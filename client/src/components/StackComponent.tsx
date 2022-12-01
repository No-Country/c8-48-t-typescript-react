import * as React from 'react';
import { Stack, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" color="success" {...props} />;
});

const CustomizedSnackbars = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;

    setIsOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%', position: 'absolute' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isOpen}
        autoHideDuration={8000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Registro exitoso! Ya puedes iniciar sesión.
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomizedSnackbars;
