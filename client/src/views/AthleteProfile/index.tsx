import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

type UserData = {
  email: string;
  fullName: string;
  urlProfile?: string;
};
export interface AthleteData {
  idAthlete: string;
  age?: number;
  gameVision?: number;
  height?: number;
  idCountry?: number;
  leadership?: number;
  strength?: number;
  temperance?: number;
  user: UserData;
  weight?: number;
}

const AthleteProfile = () => {
  const [athlete, setAthlete] = useState<AthleteData>();
  const navigate = useNavigate();
  const { athleteId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token?.length) navigate('/auth/login/athlete');
  }, []);
  useEffect(() => {
    const getAthleteProfile = async (athleteId = '059d9adc-90bd-42e8-b912-4dc69b06378f') => {
      const athlete = await client.get(`/api/athlete/${athleteId}`);
      // TODO: handle error
      const athleteProfile = athlete.data;
      setAthlete(athleteProfile.data);
    };
    if (athleteId) getAthleteProfile(athleteId);
  }, []);

  return (
    <Box sx={{ display: 'flex', margin: '1rem auto', maxWidth: 1200 }}>
      <SideBar athlete={athlete} />
      <Box>
        <Stats athlete={athlete} />
        <AcademicData athlete={athlete} />
      </Box>
    </Box>
  );
};

export default AthleteProfile;
