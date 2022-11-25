import { Box, Button, Checkbox, styled, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Nombre es requerido'),
  lastName: yup.string().required('Apellido es requerido'),
});

const Login = ({ variation = 'athlete' }: { variation: 'athlete' | 'university' }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" width="100%" mt="20px">
      <MainContainer>
        <Typography variant="h3" fontWeight="bold" mb={2}>
          Comienza a encontrar talento ya
        </Typography>
        <CustomTextField formik={formik} name={'name'} label={'Email Address'} />
        <CustomTextField formik={formik} name={'lastName'} label={'Password'} />
        <Box width="100%" maxWidth="600px">
          <Checkbox sx={{ mb: '20px' }} />
        </Box>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="button"
          sx={{ width: '80%', maxWidth: '600px' }}
          onClick={() => {
            formik.handleSubmit();
          }}
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
    sx={{ mb: '20px', maxWidth: '600px' }}
    color="primary"
    size="medium"
    variant="outlined"
    value={formik.values[name]}
    onChange={formik.handleChange}
    error={formik.touched[name] && Boolean(formik.errors[name])}
    helperText={formik.touched[name] && formik.errors[name]}
  />
);

const MainContainer = styled(Box)(() => ({
  padding: 5,
  margin: 5,
  backgroundColor: '#fff',
  display: 'flex',
  width: '80%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80hv',
}));
