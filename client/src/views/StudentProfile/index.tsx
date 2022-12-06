import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { rootBackEnd } from '../../constants/links';
import { Box, styled, Typography } from '@mui/material';

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
    <div style={{ width: '100%' }}>
      {/* {userLogged().fullName} | {athlete?.age} */}
      <ContainerFlex>
        <Column1>
          <InfoAthlete>
            <HeaderInfoAthlete>
              <OriginAthlete>
                <CountryAthlete>Col</CountryAthlete>
                <img
                  style={{ width: 30, height: 30 }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png"
                />
              </OriginAthlete>
            </HeaderInfoAthlete>
            <ImgAthlete>
              <img
                style={{ width: '100%', height: 230, margin: 'auto', display: 'block' }}
                src="https://fcf.com.co/wp-content/uploads/1991/07/James-Rodriguez-2-445x400.png"
              />
            </ImgAthlete>
            <DataAthlete>
              <ContainerData>
                <Athletedata>Edad</Athletedata>
                <Athletedata>Posicion</Athletedata>
                <Athletedata>Estudio</Athletedata>
              </ContainerData>
              <ContainerData>
                <DataAthleteNew>18</DataAthleteNew>
                <DataAthleteNew>DELANTERO</DataAthleteNew>
                <DataAthleteNew>ING</DataAthleteNew>
              </ContainerData>
            </DataAthlete>
          </InfoAthlete>
        </Column1>
        <Column2></Column2>
      </ContainerFlex>
    </div>
  );
};

export default StudentProfile;

const ContainerFlex = styled(Box)({
  width: '100%',
  display: 'flex',
  border: '1px solid #fff',
});

const Column1 = styled(Box)({
  width: '29%',
  heigth: 700,
  background: '#2F0343',
});

const InfoAthlete = styled(Box)({
  width: '100%',
});

const HeaderInfoAthlete = styled(Box)({
  width: '80%',
  margin: '20px auto 0 auto',
  padding: 5,
  borderRadius: '20px 20px 0 0',
  display: 'flex',
  background: '#333',
});

const OriginAthlete = styled(Box)({
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
});

const CountryAthlete = styled(Typography)({
  margin: 10,
  fontSize: '1em',
  color: '#fff',
});

const ImgAthlete = styled(Box)({
  width: '80%',
  height: 240,
  padding: 10,
  margin: 'auto',
  background: '#555',
});

const DataAthlete = styled(Box)({
  width: '80%',
  margin: 'auto',
  textAlign: 'center',
  padding: 5,
  borderRadius: '0 0 20px 20px',
  background: '#fff',
});

const Athletedata = styled(Typography)({
  width: '33%',
  fontSize: '17px',
  color: '#000',
});

const ContainerData = styled(Box)({
  width: '100%',
  display: 'flex',
});

const DataAthleteNew = styled(Typography)({
  width: '33%',
  fontSize: 12,
});

const Column2 = styled(Box)({
  width: 1200,
});
