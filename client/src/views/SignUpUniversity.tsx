import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Divider,
  CardMedia,
  Checkbox,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import {
  InputLabelPropsCustom,
  InputPropsCustom,
} from '../constants/mui/textFieldCustom';

const validationSchema = yup.object({
  universityName: yup.string().required('Campo obligatorio'),
  country: yup.string().required('Campo obligatorio'),
  email: yup
    .string()
    .email('Ingresar un email válido')
    .required('Email es requerido'),
  password: yup
    .string()
    .min(8, 'La contraseña debería tener un mínimo de 8 carácteres')
    .required('Contraseña es requerida'),
  linkedin: yup.string().required('Campo obligatorio'),
  website: yup.string().required('Campo obligatorio'),
  description: yup.string().required('Campo obligatorio'),
  termsAndConditions: yup
    .bool()
    .oneOf(
      [true],
      'Necesitas acpetar los terminos y condiciones antes de continuar',
    ),
});

export default function SignUpAthlete() {
  const [universityImage, setUniversityImage] = useState<any>('');
  const formik = useFormik({
    initialValues: {
      universityName: '',
      country: '',
      email: '',
      password: '',
      linkedin: '',
      website: '',
      description: '',
      termsAndConditions: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ width: '100vw', height: '100vh', mt: 5, p: 11 }}
    >
      <Typography sx={{ mb: 7, fontSize: 36 }}>
        Registra tu universidad
      </Typography>
      {/* University Name */}
      <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
        <Typography sx={textStyle}>Nombre de la universidad</Typography>
        <TextField
          fullWidth
          id="university"
          name="university-name"
          label="Nombre de la universidad"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={textFieldStyle}
          value={formik.values.universityName}
          onChange={formik.handleChange}
          error={
            formik.touched.universityName &&
            Boolean(formik.errors.universityName)
          }
          helperText={
            formik.touched.universityName && formik.errors.universityName
          }
        />
      </Box>
      <Divider />

      {/* Country*/}
      <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
        <Typography sx={textStyle}>País</Typography>
        <TextField
          fullWidth
          id="pais"
          name="País"
          label="País de origen de la universidad"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={textFieldStyle}
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
      </Box>
      <Divider />

      {/* Image Logo */}
      <Box sx={{ display: 'flex', my: 4 }}>
        <Typography sx={textStyle}>Logo de la universidad</Typography>

        <Box display="flex" justifyContent="center">
          <CardMedia
            component="img"
            sx={{
              width: 180,
              height: 180,
              mr: 5,
              bgcolor: 'rgba(0,0,0,0.1)',
              display: 'flex',
              jusitfyContent: 'center',
              alignItems: 'center',
            }}
            src={universityImage !== '' && universityImage}
          >
            {/* <ImageIcon sx={{ opacity: '0.1', height: 150, width: '100%' }} /> */}
          </CardMedia>
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
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
      <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
        <Typography sx={textStyle}>Email y contraseña</Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Ingresa tu email"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={{ width: '30%', mr: 6 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Ingresa tu contraseña"
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          inputProps={InputPropsCustom}
          sx={textFieldStyle}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>
      <Divider />

      {/* Linkedin */}
      <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
        <Typography sx={textStyle}>Linkedin de la universidad</Typography>
        <TextField
          fullWidth
          id="web"
          name="web"
          label="https://university.com"
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

      {/* Website */}
      <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
        <Typography sx={textStyle}>Sitio web de la universidad</Typography>
        <TextField
          fullWidth
          id="linkedin"
          name="linkedin"
          label="https://bo.linkedin.com"
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

      {/* Description */}
      <Box sx={{ display: 'flex', my: 4 }}>
        <Typography sx={textStyle}>Description de la universidad</Typography>
        <TextField
          multiline
          rows={7}
          fullWidth
          id="description"
          name="description"
          label="En resumen somos..."
          color="primary"
          InputLabelProps={InputLabelPropsCustom}
          // inputProps={InputPropsCustom}
          sx={{ width: '65%' }}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>
      <Divider />

      {/* Terms and conditions */}
      <Typography sx={{ mt: 3 }}>Aceptar terminos y condiciones</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          id="term"
          required
          onChange={formik.handleChange}
          value={formik.values.termsAndConditions}
        />
        <Typography>
          He leído y acepto la Politica de privacidad y la Politica de
          moderación de becas
        </Typography>
      </Box>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ width: 150, my: 8 }}
      >
        Enviar
      </Button>
    </Box>
  );
}

const textFieldStyle = { width: '30%' };
const textStyle = { width: 400, fontSize: 18, letterSpacing: '0.15px' };
