import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Ingresar un email válido').required('Email es requerido'),
  name: yup.string().required('Nombre es requerido'),
  lastName: yup.string().required('Apellido es requerido'),
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
      sx={{
        p: 10,
        mt: 5,
        bgcolor: '#fff',
        display: 'flex',
        width: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        color="primary"
        sx={textFieldStyle}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      ></TextField>

      <TextField
        fullWidth
        id="Name"
        name="Name"
        label="Nombre de la Universidad"
        color="primary"
        sx={textFieldStyle}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      ></TextField>

      <TextField
        fullWidth
        id="password"
        name="password"
        label="Contraseña"
        color="primary"
        sx={textFieldStyle}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      ></TextField>

      <Button color="primary" variant="contained" fullWidth type="submit" sx={{ width: '80%' }}>
        Sign Up
      </Button>
    </Box>
  );
}

const textFieldStyle = { width: '80%', pb: 2 };
