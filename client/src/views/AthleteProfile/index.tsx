import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { rootBackEnd } from '../../constants/links';
import SideBar from './SideBar';
import { Box } from '@mui/material';
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

  // const userLogged = () => JSON.parse(localStorage.getItem('user') ?? '{}');

  console.log(athlete);
  return (
    <Box sx={{ display: 'flex', margin: '1rem auto', maxWidth: 1200 }}>
      <SideBar />
      <Box>
        <Stats />
        <AcademicData />
      </Box>
    </Box>
  );
};

export default AthleteProfile;
