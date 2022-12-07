import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, IconButton, CardMedia, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import cancha from '../../assets/images/Cancha.png';

const Stats = () => {
  const [valuePosition, setValuePosition] = useState('di');
  useEffect(() => {
    if (valuePosition === 'dd') {
      setVacanteData({
        edad: 18,
        altura: 191,
        peso: 88,
        pierna: 'DER',
        posición: 'DD',
        aceleración: 73,
        velocidad: 65,
        salto: 54,
        tiro: 95,
        pases: 62,
        quite: 98,
        fortaleza: 68,
        liderazgo: 71,
        vision: 68,
        templanza: 70,
      });
    } else if (valuePosition === 'di') {
      setVacanteData({
        edad: 18,
        altura: 190,
        peso: 88,
        pierna: 'IZQ',
        posición: 'DI',
        aceleración: 70,
        velocidad: 65,
        salto: 54,
        tiro: 90,
        pases: 61,
        quite: 98,
        fortaleza: 72,
        liderazgo: 71,
        vision: 70,
        templanza: 73,
      });
    }
  }, [valuePosition]);

  const [vacanteData, setVacanteData] = useState<interfaceVacante>({
    edad: '',
    altura: '',
    peso: '',
    pierna: '   ',
    posición: '',
    aceleración: '',
    velocidad: '',
    salto: '',
    tiro: '  ',
    pases: '',
    quite: '',
    fortaleza: '',
    liderazgo: '',
    vision: '  ',
    templanza: '',
  });
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        color: 'white',
        flexDirection: 'column',
        background: `repeating-linear-gradient(
              to bottom,
              ${theme.palette.primary.light} 0px,
              ${theme.palette.primary.light} 40px,
              ${theme.palette.primary.tooltip} 40px,
              ${theme.palette.primary.tooltip} 80px
            )`,
        py: 2,
        px: 0,
        borderRadius: '25px',
        position: 'relative',
        my: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Display data vacante */}
      <Box sx={{ bgcolor: 'primary.dark', p: 3, width: '850px', height: '320px' }}>
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
          VACANTES DEL EQUIPO
        </Typography>

        <Box sx={{ display: 'flex' }}>
          {/* cancha image */}
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              sx={{
                width: { lg: 200, md: 190, sm: 150, xs: 100 },
                height: { lg: 200, md: 190, sm: 150, xs: 100 },
                objectFit: 'contain',
              }}
              src={cancha}
            />
            {/* DD */}
            <Tooltip title="Delantero derecho">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'dd' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  right: 60,
                  top: 35,
                }}
                onClick={() => setValuePosition('dd')}
              />
            </Tooltip>

            {/* DI */}
            <Tooltip title="Delantero izquierdo">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'di' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  left: 62,
                  top: 35,
                }}
                onClick={() => setValuePosition('di')}
              />
            </Tooltip>

            {/* Vi */}
            <Tooltip title="Volante izquierdo">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'vi' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  left: 40,
                  top: 65,
                }}
                onClick={() => setValuePosition('vi')}
              />
            </Tooltip>

            {/* VD */}
            <Tooltip title="Volante derecho">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'vd' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  right: 40,
                  top: 65,
                }}
                onClick={() => setValuePosition('vd')}
              />
            </Tooltip>

            {/* CVD */}
            <Tooltip title="Volante central derecho">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'cvd' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  right: 60,
                  top: 95,
                }}
                onClick={() => setValuePosition('cvd')}
              />
            </Tooltip>

            {/* CVI */}
            <Tooltip title="Volante central izquierdo">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'cvi' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  left: 62,
                  top: 95,
                }}
                onClick={() => setValuePosition('cvi')}
              />
            </Tooltip>

            {/* DLI */}
            <Tooltip title="Defensa lateral izquierdo">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'dli' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  left: 40,
                  top: 125,
                }}
                onClick={() => setValuePosition('dli')}
              />
            </Tooltip>

            {/* DLD */}
            <Tooltip title="Defensa lateral derecho">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'dld' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  right: 40,
                  top: 125,
                }}
                onClick={() => setValuePosition('dld')}
              />
            </Tooltip>

            {/* DCD */}
            <Tooltip title="Defensa central derecho">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'dcd' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  right: 60,
                  top: 155,
                }}
                onClick={() => setValuePosition('dcd')}
              />
            </Tooltip>
            {/* DCI */}
            <Tooltip title="Defensa central izquierdo">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'dci' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  left: 62,
                  top: 155,
                }}
                onClick={() => setValuePosition('dci')}
              />
            </Tooltip>
            {/* P */}
            {/* TODO: copy same to other positions */}
            <Tooltip title="Portero">
              <Box
                sx={{
                  height: '33px',
                  width: '50px',
                  bgcolor: valuePosition === 'p' ? 'rgba(11, 188, 29, 0.45)' : 'none',
                  position: 'absolute',
                  left: 75,
                  top: 170,
                }}
                onClick={() => setValuePosition('p')}
              />
            </Tooltip>
          </Box>

          <Box sx={{ display: 'flex' }}>
            {/* First block */}
            <Box sx={{ display: 'flex', px: 3, flexGrow: 1 }}>
              <Box sx={{ width: 103 }}>
                <Typography sx={acontecimientosStyle}>EDAD</Typography>
                <Typography sx={acontecimientosStyle}>ALTURA</Typography>
                <Typography sx={acontecimientosStyle}>PESO</Typography>
                <Typography sx={acontecimientosStyle}>PIERNA HÁBIL</Typography>
                <Typography sx={acontecimientosStyle}>POSICIÓN</Typography>
              </Box>
              <Box sx={{ ml: 4 }}>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.edad}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.altura}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.peso}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.pierna}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.posición}</Typography>
              </Box>
            </Box>

            {/* Second block */}

            <Box sx={{ display: 'flex', px: 3 }}>
              <Box sx={{ color: 'secondary.main' }}>
                <Typography sx={acontecimientosStyle}>ACELERACIÓN</Typography>
                <Typography sx={acontecimientosStyle}>VELOCIDAD</Typography>
                <Typography sx={acontecimientosStyle}>SALTO</Typography>
                <Typography sx={acontecimientosStyle}>TIRO AL ARCO</Typography>
                <Typography sx={acontecimientosStyle}>PASES</Typography>
                <Typography sx={acontecimientosStyle}>QUITE</Typography>
              </Box>
              <Box sx={{ ml: 4 }}>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.aceleración}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.velocidad}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.salto}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.tiro}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.pases}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.quite}</Typography>
              </Box>
            </Box>

            {/* Third block */}

            <Box sx={{ display: 'flex', px: 3 }}>
              <Box sx={{ width: 110 }}>
                <Typography sx={acontecimientosStyle}>FORTALEZA</Typography>
                <Typography sx={acontecimientosStyle}>LIDERAZGO</Typography>
                <Typography sx={acontecimientosStyle}>VISIÓN DE JUEGO</Typography>
                <Typography sx={acontecimientosStyle}>TEMPLANZA</Typography>
              </Box>
              <Box sx={{ ml: 4 }}>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.fortaleza}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.liderazgo}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.vision}</Typography>
                <Typography sx={acontecimientosDataStyle}>{vacanteData.templanza}</Typography>
              </Box>
            </Box>
          </Box>
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
            mr: 0,
            bgcolor: 'secondary.main',
            p: 1,

            width: 225,
          }}
        >
          {' '}
          DELANTERO DERECHO 71
        </Typography>
      </Box>
      {/* Close minimum required */}
    </Box>
  );
};

export default Stats;
// styles
const acontecimientosStyle = { fontSize: 15, color: 'secondary.light', lineHeight: 2.5 };
const acontecimientosDataStyle = { fontSize: 15, color: 'secondary.main', lineHeight: 2.5 };

interface interfaceVacante {
  edad: string | number;
  altura: string | number;
  peso: string | number;
  pierna: string;
  posición: string;
  aceleración: string | number;
  velocidad: string | number;
  salto: string | number;
  tiro: string | number;
  pases: string | number;
  quite: string | number;
  fortaleza: string | number;
  liderazgo: string | number;
  vision: string | number;
  templanza: string | number;
}
