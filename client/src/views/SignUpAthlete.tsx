import React from 'react';
import { Box, TextField, Typography, Button, Link } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  InputLabelPropsCustom,
  InputPropsCustom,
} from '../constants/mui/textFieldCustom';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Ingresa un email válido')
    .required('Email es requerido'),
  name: yup.string().required('Nombre es requerido'),
  lastName: yup.string().required('Nombre es requerido'),
  password: yup
    .string()
    .min(8, 'La contraseña debería tener un mínimo de 8 carácteres')
    .required('Contraseña es requerida'),
});

export default function SignUpAthlete() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      lastName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography sx={{ fontSize: 40, fontWeight: 700, mb: 5 }}>
        Deja que las becas lleguen a tí
      </Typography>
      <Box
        sx={{
          px: 12,
          pt: 5,
          bgcolor: '#fff',
          display: 'flex',
          width: 650,
          height: 330,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ width: '100%', height: '100%' }}
        >
          <Typography sx={{ fontSize: '24px', mb: '16px' }}>
            Continuar con Email
          </Typography>
          <TextField
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            color="primary"
            InputLabelProps={InputLabelPropsCustom}
            inputProps={InputPropsCustom}
            sx={textFieldStyle}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>

          <Typography
            sx={{ my: 3, fontSize: '12px', color: 'rgba(0,0,0,0.6)' }}
          >
            By continuing, you agree that we create an account for you (unless
            already created), and accept our{' '}
            <Link href="#" sx={linkStyle}>
              Terms and Conditions
            </Link>{' '}
            and{' '}
            <Link href="#" sx={linkStyle}>
              Privacy Policy.
            </Link>
          </Typography>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ width: '121px', fontSize: 12, letterSpacing: 0.5 }}
          >
            CONTINUAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const textFieldStyle = { width: '100%' };
const linkStyle = { color: 'rgba(0,0,0,0.6)', textDecoration: 'underline' };
