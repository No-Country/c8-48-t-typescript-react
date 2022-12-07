import { Box, Button, Typography, useTheme, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const AcademicData = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: `repeating-linear-gradient(
      to bottom,
      ${theme.palette.primary.light} 0px,
      ${theme.palette.primary.light} 40px,
      ${theme.palette.primary.tooltip} 40px,
      ${theme.palette.primary.tooltip} 80px
    )`,
        py: 2,
        px: 2,
        borderRadius: '25px',
        position: 'relative',
        my: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ bgcolor: 'primary.dark', p: 3, width: '850px' }}>
        <IconButton sx={{ position: 'absolute', color: 'secondary.dark', right: 40, top: 10 }}>
          <EditIcon />
        </IconButton>
        <Typography
          sx={{
            color: 'secondary.main',
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: '0.46px',
            mb: 2,
          }}
        >
          UNIVERSIDAD
        </Typography>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <Box sx={{ color: 'secondary.main' }}>
            <Typography sx={acontecimientosStyle}>PROMEDIO</Typography>
            <Typography sx={acontecimientosStyle}>ÁREA DE ESTUDIO</Typography>
          </Box>
          <Box sx={{ ml: 4 }}>
            <Typography sx={acontecimientosDataStyle}>{`> 8.00`}</Typography>
            <Typography sx={acontecimientosDataStyle}>ARTE, ARQUITECTURA Y DISEÑO (ARQ)</Typography>
            <Typography sx={acontecimientosDataStyle}>
              CS EXACTAS, INGENIERÍA, y SISTEMAS (ING)
            </Typography>
          </Box>
        </Box>
        {/* UPLOAD zz */}
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.dark',
          }}
        >
          <Button
            sx={{
              fontSize: { lg: '14px', md: '12px', sm: '11px', xs: '10px' },
              bgcolor: 'primary.light',
              color: 'secondary.main',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              p: 5,
              '&:hover': {},
            }}
            variant="contained"
            component="label"
            size="small"
          >
            <Box
              sx={{
                position: 'absolute',
                border: `solid 3px ${theme.palette.primary.main}`,
                width: '80%',
                height: '80%',
                p: 5,
              }}
            />
            <Typography sx={{ color: 'white' }}>
              CARGA TU
              <br />
              HISTORIAL
              <br />
              ACADÉMICO
            </Typography>
            <input
              name="avatar"
              type="file"
              accept="application/pdf"
              hidden
              onChange={(e) => {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  if (fileReader.readyState === 2) {
                    // setPdfFile(fileReader.result); (handle file with useState)
                  }
                  return;
                };
                e.target.files instanceof FileList
                  ? fileReader.readAsDataURL(e.target.files[0])
                  : 'handle exception';
              }}
            />
          </Button>
        </Box>
      </Box>
      {/* Minimum required  */}
      <Box sx={{ display: 'flex', width: '850px', justifyContent: 'end' }}>
        <Typography sx={{ color: `${theme.palette.secondary.main}`, mt: 2, p: 1 }}>
          {' '}
          REQUERIMIENTO MÍNIMO:
        </Typography>
        <Typography
          sx={{
            color: `${theme.palette.primary.main}`,
            m: 2,
            bgcolor: 'secondary.main',
            p: 1,
            mr: 0,
            width: 225,
            textAlign: 'center',
          }}
        >
          {' '}
          ARQ-ING 8.00
        </Typography>
      </Box>
      {/* Close minimum required */}
    </Box>
  );
};

export default AcademicData;
// styles
const acontecimientosStyle = { fontSize: 15, color: 'secondary.light', lineHeight: 2.5 };
const acontecimientosDataStyle = { fontSize: 15, color: 'secondary.main', lineHeight: 2.5 };
