import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { rootBackEnd } from '../../constants/links';

const client = axios.create({
  baseURL: rootBackEnd,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const StudentProfile = () => {
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

  const userLogged = () => JSON.parse(localStorage.getItem('user') ?? '{}');

  return (
    <div>
      {userLogged().fullName} | {athlete?.age}
    </div>
  );
};

export default StudentProfile;
