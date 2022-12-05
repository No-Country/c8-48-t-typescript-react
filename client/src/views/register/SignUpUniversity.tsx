import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Divider,
  CardMedia,
  Checkbox,
  MenuItem,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputLabelPropsCustom, InputPropsCustom } from '../../constants/mui/textFieldCustom';
import useRequestAuth from '../../services/hooks/useRequestAuth';
import { useNavigate } from 'react-router-dom';

const countriesData = [
  { id: 1, name: 'Argentina' },
  { id: 2, name: 'Colombia' },
  { id: 3, name: 'Chile' },
  { id: 4, name: 'Uruguay' },
  { id: 5, name: 'Costa Rica' },
];

const validationSchema = yup.object({
  fullName: yup.string().required('Campo obligatorio'),
  idCountry: yup.string().required('Campo obligatorio'),
  email: yup
    .string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Debe ingresar un correo electrónico valido')
    .required('Email es requerido'),
  password: yup
    .string()
    .required('Contraseña es requerida')
    .matches(
      /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'La contraseña debe tener una letra mayúscula, minúscula y un número',
    ),
  linkedin: yup.string(),
  website: yup.string(),
  description: yup.string(),
  acceptConditions: yup
    .bool()
    .oneOf([true], 'Necesitas aceptar los términos y condiciones antes de continuar'),
});

function DataURIToBlob(dataURI: string) {
  const splitDataURI = dataURI.split(',');
  const byteString =
    splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
}

const SignUpUniversity = () => {
  const navigate = useNavigate();

  const { postRegisterUniversity, registerUniversityData } = useRequestAuth();
  const [universityImage, setUniversityImage] = useState<any>('');

  const formik = useFormik({
    initialValues: {
      fullName: '',
      idCountry: '',
      email: '',
      password: '',
      linkedin: '',
      website: '',
      description: '',
      acceptConditions: false,
      file: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const file = DataURIToBlob(universityImage);
      const form_data = new FormData();
      form_data.append('file', file, 'image.jpg');
      form_data.append('fullName', values.fullName);
      form_data.append('email', values.email);
      form_data.append('password', values.password);
      form_data.append('idCountry', values.idCountry);
      form_data.append('linkedin', values.linkedin);
      form_data.append('website', values.website);
      form_data.append('description', values.description);
      form_data.append('acceptConditions', JSON.stringify(values.acceptConditions));

      postRegisterUniversity(form_data);
    },
  });

  useEffect(() => {
    registerUniversityData.email !== '' ? navigate('/auth/login/university') : null;
  }, [registerUniversityData]);

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ width: '100vw', height: '100vh', mt: 5, p: { lg: 11, md: 11, sm: 10, xs: 4 } }}
    >
      <Typography color="secondary" sx={{ mb: 7, fontSize: { lg: 36, md: 36, sm: 28, xs: 24 } }}>
        Registra tu universidad
      </Typography>
      {/* University Name */}
      <Box sx={sectionFieldStyled}>
        <Typography color="secondary" sx={textStyle}>
          Nombre de la universidad
        </Typography>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Nombre de la universidad"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={textFieldStyle}
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
      </Box>
      <Divider />

      {/* idCountry*/}
      <Box sx={sectionFieldStyled}>
        <Typography color="secondary" sx={textStyle}>
          País
        </Typography>
        <TextField
          fullWidth
          id="idCountry"
          name="idCountry"
          label="País de origen de la universidad"
          select
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={textFieldStyle}
          value={formik.values.idCountry}
          onChange={formik.handleChange}
          error={formik.touched.idCountry && Boolean(formik.errors.idCountry)}
          helperText={formik.touched.idCountry && formik.errors.idCountry}
        >
          {countriesData.map((option) => (
            <MenuItem color="secondary" key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Divider />

      {/* Image Logo */}
      <Box sx={sectionFieldStyled}>
        <Typography color="secondary" sx={textStyle}>
          Logo de la universidad
        </Typography>

        <Box display="flex" justifyContent="center">
          <CardMedia
            component="img"
            sx={{
              width: { lg: 200, md: 190, sm: 150, xs: 100 },
              height: { lg: 200, md: 190, sm: 150, xs: 100 },
              mr: 5,
              bgcolor: 'rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              objectFit: 'contain',
            }}
            src={universityImage !== '' ? universityImage : ''}
          ></CardMedia>
          <Button
            sx={{
              fontSize: { lg: '14px', md: '12px', sm: '11px', xs: '10px' },
              bgcolor: 'secondary.main',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'secondary.main',
              },
            }}
            variant="contained"
            component="label"
            size="small"
            startIcon={
              <CloudUploadIcon
                sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
              />
            }
          >
            Selecciona una imagen
            <input
              name="avatar"
              accept="image/*"
              type="file"
              hidden
              onChange={(e) => {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  if (fileReader.readyState === 2) {
                    formik.setFieldValue('logo', fileReader.result);
                    setUniversityImage(fileReader.result);
                  }
                };
                e.target.files instanceof FileList
                  ? fileReader.readAsDataURL(e.target.files[0])
                  : 'handle exception';
              }}
            />
          </Button>
        </Box>
      </Box>
      <Divider />

      {/*Email password  */}
      <Box sx={sectionFieldStyled}>
        <Typography color="secondary" sx={textStyle}>
          Email y contraseña
        </Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Ingresa tu email"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={{ width: { lg: '25%', md: '25%', sm: '60%', xs: '100%' }, mr: 2 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          label="Ingresa tu contraseña"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={{ width: { lg: '25%', md: '25%', sm: '60%', xs: '100%' }, mr: 2 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>
      <Divider />

      {/* Website */}
      <Box sx={sectionFieldStyled}>
        <Typography color="secondary" sx={textStyle}>
          Sitio web de la universidad
        </Typography>
        <TextField
          fullWidth
          id="website"
          name="website"
          label="Ingresa la URL de la universidad"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={textFieldStyle}
          value={formik.values.website}
          onChange={formik.handleChange}
          error={formik.touched.website && Boolean(formik.errors.website)}
          helperText={formik.touched.website && formik.errors.website}
        />
      </Box>
      <Divider />

      {/* Linkedin */}
      <Box sx={sectionFieldStyled}>
        <Typography color="secondary" sx={textStyle}>
          LinkedIn de la universidad
        </Typography>
        <TextField
          fullWidth
          id="linkedin"
          name="linkedin"
          label="Ingresa el enlace al LinkedIn de la universidad"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={textFieldStyle}
          value={formik.values.linkedin}
          onChange={formik.handleChange}
          error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
          helperText={formik.touched.linkedin && formik.errors.linkedin}
        />
      </Box>
      <Divider />

      {/* Description */}
      <Box sx={sectionFieldStyled}>
        <Typography color="secondary" sx={textStyle}>
          Descripción de la universidad
        </Typography>
        <TextField
          multiline
          rows={7}
          fullWidth
          id="description"
          name="description"
          label="En resumen somos..."
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          sx={{ width: { lg: '60%', md: '50%' } }}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>
      <Divider />

      {/* Terms and conditions */}
      <Typography color="secondary" sx={{ mt: 3 }}>
        Aceptar términos y condiciones:
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          id="acceptConditions"
          required
          onChange={formik.handleChange}
          value={formik.values.acceptConditions}
          color="secondary"
        />
        <Typography color="secondary" sx={{ fontSize: { sm: '14px', xs: '12px' } }}>
          He leído y acepto la Política de privacidad y la Política de moderación de becas.
        </Typography>
      </Box>

      <Button
        variant="contained"
        fullWidth
        type="submit"
        sx={{
          width: 150,
          my: 8,
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
  );
};

export default SignUpUniversity;

const textFieldStyle = { width: { lg: '25%', md: '30%', sm: '60%', xs: '100%' } };
const textStyle = {
  width: { lg: 400, md: 300 },
  fontSize: { lg: 18, md: 18, sm: 16 },
  letterSpacing: '0.15px',
};
const sectionFieldStyled = {
  display: 'flex',
  flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
  alignItems: { lg: 'center', md: 'center', sm: 'start', xs: 'start' },
  gap: { lg: 0, md: 0, sm: 2, xs: 2 },
  my: 4,
};
