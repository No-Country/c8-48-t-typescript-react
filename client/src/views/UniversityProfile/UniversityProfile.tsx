import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, IconButton, CardMedia, Tooltip } from '@mui/material';
import cancha from '../../assets/images/Cancha.png';
import EditIcon from '@mui/icons-material/Edit';
import { motion, AnimatePresence } from 'framer-motion';
import SideBar from './SideBar';
export default function UniversityProfile() {
  const [valuePosition, setValuePosition] = useState('');
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
    <Box sx={{ display: 'flex' }}>
      {/* Side bar */}
      <SideBar />
      {/* Data */}
      <Box sx={{ width: '85%' }}>
        {/* Vacantes del equipo */}
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
            width: '75vw',
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
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'dd' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      right: 60,
                      top: 35,
                    }}
                    onClick={() => setValuePosition('dd')}
                    disabled={false}
                  />
                </Tooltip>

                {/* DI */}
                <Tooltip title="Delantero izquierdo">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'di' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      left: 62,
                      top: 35,
                    }}
                    onClick={() => setValuePosition('di')}
                    disabled={false}
                  />
                </Tooltip>

                {/* Vi */}
                <Tooltip title="Volante izquierdo">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'vd' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      left: 40,
                      top: 65,
                    }}
                    onClick={() => setValuePosition('vd')}
                    disabled={false}
                  />
                </Tooltip>

                {/* VD */}
                <Tooltip title="Volante derecho">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'vi' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      right: 40,
                      top: 65,
                    }}
                    onClick={() => setValuePosition('vi')}
                    disabled={false}
                  />
                </Tooltip>

                {/* CVD */}
                <Tooltip title="Volante central derecho">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'cvd' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      right: 60,
                      top: 95,
                    }}
                    onClick={() => setValuePosition('cvd')}
                    disabled={false}
                  />
                </Tooltip>

                {/* CVI */}
                <Tooltip title="Volante central izquierdo">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'cvi' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      // border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      left: 62,
                      top: 95,
                    }}
                    onClick={() => setValuePosition('cvi')}
                    disabled={true}
                  />
                </Tooltip>

                {/* DLI */}
                <Tooltip title="Defensa lateral izquierdo">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'dli' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      left: 40,
                      top: 125,
                    }}
                    onClick={() => setValuePosition('dli')}
                    disabled={false}
                  />
                </Tooltip>

                {/* DLD */}
                <Tooltip title="Defensa lateral derecho">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'dld' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      // border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      right: 40,
                      top: 125,
                    }}
                    onClick={() => setValuePosition('dld')}
                    disabled={true}
                  />
                </Tooltip>

                {/* DCD */}
                <Tooltip title="Defensa central derecho">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'dcd' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      right: 60,
                      top: 155,
                    }}
                    onClick={() => setValuePosition('dcd')}
                    disabled={false}
                  />
                </Tooltip>
                {/* DCI */}
                <Tooltip title="Defensa central izquierdo">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'dci' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      // border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      left: 62,
                      top: 155,
                    }}
                    onClick={() => setValuePosition('dci')}
                    disabled={true}
                  />
                </Tooltip>
                {/* P */}
                <Tooltip title="Portero">
                  <Box
                    component="button"
                    sx={{
                      height: '15px',
                      width: '15px',
                      bgcolor: valuePosition === 'p' ? `${theme.palette.primary.main}` : 'none',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      // border: `2px solid ${theme.palette.secondary.dark}`,
                      position: 'absolute',
                      left: 92.5,
                      top: 185,
                    }}
                    onClick={() => setValuePosition('p')}
                    disabled={true}
                  />
                </Tooltip>
              </Box>

              {/* Animation data */}
              {valuePosition === '' ? (
                <Typography sx={{ color: 'secondary.light' }}>SELECCIONA UNA POSICIÓN</Typography>
              ) : (
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={valuePosition ? valuePosition : 'empty'}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
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
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.altura}
                          </Typography>
                          <Typography sx={acontecimientosDataStyle}>{vacanteData.peso}</Typography>
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.pierna}
                          </Typography>
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.posición}
                          </Typography>
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
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.aceleración}
                          </Typography>
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.velocidad}
                          </Typography>
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
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.fortaleza}
                          </Typography>
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.liderazgo}
                          </Typography>
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.vision}
                          </Typography>
                          <Typography sx={acontecimientosDataStyle}>
                            {vacanteData.templanza}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </AnimatePresence>
              )}
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

        {/* Universidad */}
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
            width: '75vw',
            py: 2,
            px: 0,
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
                <Typography sx={acontecimientosDataStyle}>
                  ARTE, ARQUITECTURA Y DISEÑO (ARQ)
                </Typography>
                <Typography sx={acontecimientosDataStyle}>
                  CS EXACTAS, INGENIERÍA, y SISTEMAS (ING)
                </Typography>
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
        {/* Close Universidad */}

        {/* ACONTECIMIENTOS */}
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
            width: '75vw',
            py: 2,
            px: 0,
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
              ACONTECIMIENTOS DEPORTIVOS
            </Typography>
            <Box sx={{ display: 'flex', gap: 5 }}>
              <Box sx={{ color: 'secondary.main' }}>
                <Typography sx={acontecimientosStyle}>POSICIÓN ACTUAL</Typography>
                <Typography sx={acontecimientosStyle}>POS. ÚLTIMOS TRES</Typography>
                <Typography sx={acontecimientosStyle}>HITOS</Typography>
              </Box>
              <Box sx={{ ml: 4 }}>
                <Typography sx={acontecimientosDataStyle}>TERCERO</Typography>
                <Typography sx={acontecimientosDataStyle}>PRIMERO - TERCERO - TERCERO</Typography>
                <Typography sx={acontecimientosDataStyle}>8 VECES CAMPEÓN DE LA LIGA</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Close vacantes del equipo */}
      </Box>
    </Box>
  );
}

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
