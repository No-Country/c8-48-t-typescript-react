import { Box, Button, Card, styled, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Ingresa un email válido').required('Email es requerido'),
  name: yup.string().required('Nombre es requerido'),
  lastName: yup.string().required('Nombre es requerido'),
  password: yup
    .string()
    .min(8, 'La contraseña debería tener un mínimo de 8 carácteres')
    .required('Contraseña es requerida'),
});

const Login = ({ variation = 'athlete' }: { variation: 'athlete' | 'universitie' }) => {
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
    <Box display="flex" flexDirection="row" justifyContent="center" width="100%" mt="20px">
      <MainContainer>
        <CustomTextField formik={formik} name={'name'} label={'Nombre'} />
        <CustomTextField formik={formik} name={'lastName'} label={'Apellido'} />
        <CustomTextField formik={formik} name={'email'} label={'Email'} />
        <CustomTextField formik={formik} name={'password'} label={'Contraseña'} />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ width: '80%' }}
          onSubmit={() => alert(formik.errors)}
        >
          Ingresar como {variation}
        </Button>
      </MainContainer>
    </Box>
  );
};

export default Login;

const CustomTextField = ({ formik, name, label }: { formik: any; name: string; label: string }) => (
  <TextField
    fullWidth
    id={name}
    name={name}
    label={label}
    sx={{ mb: '20px' }}
    color="primary"
    value={formik.values[name]}
    onChange={formik.handleChange}
    error={formik.touched[name] && Boolean(formik.errors[name])}
    helperText={formik.touched[name] && formik.errors[name]}
  />
);

const MainContainer = styled(Box)(() => ({
  padding: 10,
  margin: 5,
  backgroundColor: '#fff',
  display: 'flex',
  width: '80%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
}));
