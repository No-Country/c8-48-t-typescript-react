import {
  Box,
  Button,
  Checkbox,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { postLogin } from '../../services/conections';

const validationSchema = yup.object({
  name: yup.string().required('Nombre es requerido'),
  lastName: yup.string().required('Apellido es requerido'),
});

const Login = ({
  variation = 'athlete',
}: {
  variation: 'athlete' | 'university';
}) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      postLogin({ email: values.name, password: values.lastName });
    },
  });
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      width="100%"
      mt="20px"
      p={4}
    >
      <MainContainer>
        <Typography variant="h3" fontWeight="bold" mb={2}>
          Comienza a encontrar {variation === 'university' ? 'talento' : 'becas'} ya
        </Typography>
        <CustomTextField
          formik={formik}
          name={'name'}
          label={'Email Address'}
        />
        <CustomTextField
          formik={formik}
          name={'lastName'}
          label={'Password'}
          type="password"
        />
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

const CustomTextField = ({
  formik,
  name,
  label,
  type = 'text',
}: {
  formik: any;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
}) => (
  <TextField
    fullWidth
    id={name}
    name={name}
    label={label}
    sx={{ mb: '20px', maxWidth: '600px' }}
    color="primary"
    size="medium"
    type={type}
    variant="outlined"
    value={formik.values[name]}
    onChange={formik.handleChange}
    error={formik.touched[name] && Boolean(formik.errors[name])}
    helperText={formik.touched[name] && formik.errors[name]}
  />
);

const MainContainer = styled(Box)(() => ({
  padding: '40px',
  margin: 5,
  backgroundColor: '#fff',
  display: 'flex',
  width: '80%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80hv',
}));
