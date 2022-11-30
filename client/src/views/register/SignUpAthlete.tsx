import React from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputLabelPropsCustom, InputPropsCustom } from '../../constants/mui/textFieldCustom';
import { useTheme } from '@mui/material';
const validationSchema = yup.object({
  email: yup
    .string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Debe ingresar un correo electrónico válido')
    .required('Correo electrónico es requerido'),
});

export default function SignUpAthlete() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // style
  const textFieldStyle = { width: '100%' };
  const linkStyle = { color: theme.palette.secondary.light, textDecoration: 'underline' };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: { lg: 40, md: 32, sm: 28, xs: 22 }, fontWeight: 700, mb: 5 }}>
        Deja que las becas lleguen a tí
      </Typography>
      <Box
        sx={{
          px: { lg: 12, md: 10, sm: 8, xs: 5 },
          pt: { lg: 5, md: 3, sm: 4, xs: 5 },
          bgcolor: theme.palette.secondary.main,
          display: 'flex',
          width: { lg: 650, md: 600, sm: 580, xs: '90%' },
          height: { lg: 330, md: 300, sm: 320, xs: 350 },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: '100%', height: '100%' }}>
          <Typography sx={{ fontSize: '24px', mb: '16px' }}>Continuar con Email</Typography>
          <TextField
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            color="primary"
            size="medium"
            InputLabelProps={InputLabelPropsCustom}
            inputProps={InputPropsCustom}
            sx={textFieldStyle}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>

          <Typography sx={{ my: 3, fontSize: '12px', color: theme.palette.secondary.light }}>
            By continuing, you agree that we create an account for you (unless already created), and
            accept our&nbsp;
            <Link href="#" sx={linkStyle}>
              Terms and Conditions
            </Link>
            &nbsp;and&nbsp;
            <Link href="#" sx={linkStyle}>
              Privacy Policy.
            </Link>
          </Typography>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              width: { lg: 120, md: 100, sm: 110 },
              fontSize: { lg: 12, md: 11, sm: 10, xs: 10 },
              letterSpacing: 0.5,
            }}
          >
            CONTINUAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
