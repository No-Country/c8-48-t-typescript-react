import { useEffect } from 'react';
import { Box, TextField, Typography, Button, Link, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputLabelPropsCustom, InputPropsCustom } from '../../constants/mui/textFieldCustom';
import stadium from '../../assets/images/stadium.png';
import useRequestAuth from '../../services/hooks/useRequestAuth';
import { useNavigate } from 'react-router-dom';
const validationSchema = yup.object({
  fullName: yup.string().required('Nombre completo es requerido'),
  email: yup
    .string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Debe ingresar un correo electrónico válido')
    .required('Correo electrónico es requerido'),
  password: yup
    .string()
    .required('Contraseña es requerida')
    .matches(
      /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'La contraseña debe tener una letra mayúscula, minúscula y un número',
    ),
});

const SignUpAthlete = () => {
  const navigate = useNavigate();
  const { postRegisterAthlete, registerAthleteData } = useRequestAuth();

  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postRegisterAthlete(values);
    },
  });

  // style
  const textFieldStyle = { width: '100%', m: 1 };
  const linkStyle = {
    color: theme.palette.secondary.light,
    textDecoration: 'underline',
  };
  useEffect(() => {
    registerAthleteData.email !== '' &&
      navigate('/auth/login/athlete', { state: { fromRegister: true } });
  }, [registerAthleteData]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        backgroundImage: `url(${stadium})`,
        backgroundSize: 'cover',
        boxShadow: 'inset 0 0 0 1000px rgba(34, 11, 57, 0.90)',
        width: '100vw',
        height: '100vh',
        py: 10,
      }}
    >
      <Typography
        sx={{
          color: 'secondary.main',
          fontSize: { lg: 40, md: 32, sm: 28, xs: 22 },
          fontWeight: 700,
          mb: 5,
        }}
      >
        Deja que las becas lleguen a tí
      </Typography>
      <Box
        sx={{
          px: { lg: 12, md: 10, sm: 8, xs: 5 },
          py: { lg: 6, md: 3, sm: 4, xs: 5 },

          bgcolor: theme.palette.secondary.main,
          display: 'flex',
          width: { lg: 650, md: 600, sm: 580, xs: '90%' },
          height: { lg: 350, md: 300, sm: 320, xs: 350 },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '15px',
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
        >
          <TextField
            variant="outlined"
            id="fullName"
            name="fullName"
            label="Nombre Completo"
            color="primary"
            size="small"
            InputLabelProps={InputLabelPropsCustom}
            inputProps={InputPropsCustom}
            sx={textFieldStyle}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            variant="outlined"
            id="email"
            name="email"
            label="Correo"
            color="primary"
            size="small"
            InputLabelProps={InputLabelPropsCustom}
            inputProps={InputPropsCustom}
            sx={textFieldStyle}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            id="password"
            name="password"
            label="Contraseña"
            color="primary"
            type="password"
            autoComplete="current-password"
            size="small"
            InputLabelProps={InputLabelPropsCustom}
            inputProps={InputPropsCustom}
            sx={textFieldStyle}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 5,
            }}
          >
            <Typography
              sx={{
                width: '50%',
                my: 3,
                fontSize: '9px',
                color: theme.palette.secondary.light,
              }}
            >
              By continuing, you agree that we create an account for you (unless already created),
              and accept our&nbsp;
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
              size="small"
              sx={{
                width: { lg: 120, md: 100, sm: 110 },
                fontSize: { lg: 12, md: 11, sm: 10, xs: 10 },
                letterSpacing: 0.5,
                height: 30,
                borderRadius: '10px',
                bgcolor: 'secondary.dark',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                },
              }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpAthlete;
