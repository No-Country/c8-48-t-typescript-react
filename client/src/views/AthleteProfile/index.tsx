import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { rootBackEnd } from '../../constants/links';
import SideBar from './SideBar';
import { Box, useTheme } from '@mui/material';
import Stats from './Stats';
import AcademicData from './AcademicData';

const client = axios.create({
  baseURL: rootBackEnd,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const AthleteProfile = () => {
  const [athlete, setAthlete] = useState({ age: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token?.length) navigate('/auth/login/athlete');
    // const athleteId = localStorage.getItem('athleteId');
    // if (!athleteId?.length) navigate('/auth/login/athlete');
  }, []);
  useEffect(() => {
    const getAthleteProfile = async (athleteId = 'e96a2199-9ec1-443f-b57a-3e994d2cd1d3') => {
      const athlete = await client.get(`/api/athlete/${athleteId}`);
      console.log({ athlete });
      const athleteProfile = athlete.data;
      setAthlete(athleteProfile);
    };
    const athleteId = localStorage.getItem('athleteId');
    if (athleteId) getAthleteProfile(athleteId);
  }, []);

  const theme = useTheme();

  // const userLogged = () => JSON.parse(localStorage.getItem('user') ?? '{}');

  console.log(athlete);
  return (
    <Box sx={{ display: 'flex', margin: '1rem auto', maxWidth: 1200 }}>
      {/* Side bar */}
      <SideBar />
      {/* Data */}
      <Box sx={{ width: '85%' }}>
        {/* Vacantes del equipo */}
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
          <Stats />
        </Box>

        <AcademicData />
      </Box>
    </Box>
  );
};

export default AthleteProfile;
