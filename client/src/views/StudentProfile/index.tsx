import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { rootBackEnd } from '../../constants/links';
import { Box, styled, Typography, Select, MenuItem } from '@mui/material';

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
                  style={{ width: 30, height: 20 }}
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
          <Anuncio>
            <AnuncioTitle>¿Buscas una oportunidad?</AnuncioTitle>
            <TextAnuncio>
              MANTENER TU ESTADO ACTULIZADO TE PERMITIRA APARECER EN EL BUSCADOR DE LAS
              UNIVERSIDADES
            </TextAnuncio>
            <SelectEstado>
              <Estados>Bucando</Estados>
              <Estados>Pausado</Estados>
              <Estados>Tramitando</Estados>
              <Estados>Escucho ofertas</Estados>
            </SelectEstado>
          </Anuncio>
          <ContainerResumen>
            <TitleEstadisticas>Resumen</TitleEstadisticas>
            <EstadisticaCuenta>PERFIL ACTUALIZADO 80%</EstadisticaCuenta>
            <EstadisticaCuenta>SOLICITUDES RECIBIDAS 7</EstadisticaCuenta>
            <EstadisticaCuenta>SOLICITUDES ENVIADAS 4</EstadisticaCuenta>
            <EstadisticaCuenta>MIEMBRO DESDE 04/05/22</EstadisticaCuenta>
          </ContainerResumen>
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
});

const Column1 = styled(Box)({
  width: '30%',
  heigth: 700,
  background: '#2F0343',
});

const InfoAthlete = styled(Box)({
  width: '100%',
});

const HeaderInfoAthlete = styled(Box)({
  width: '85%',
  margin: '20px auto 0 auto',
  padding: 5,
  borderRadius: '20px 20px 0 0',
  display: 'flex',
  background: '#333',
});

const OriginAthlete = styled(Box)({
  width: '85%',
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
  width: '85%',
  height: 240,
  padding: 10,
  margin: 'auto',
  background: '#555',
});

const DataAthlete = styled(Box)({
  width: '85%',
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

const Anuncio = styled(Box)({
  width: '85%',
  padding: '10px',
  margin: '20px auto',
  border: '3px solid #220B39',
});

const AnuncioTitle = styled(Typography)({
  fontSize: '25px',
  color: '#fff',
});

const TextAnuncio = styled(Typography)({
  fontSize: '14px',
  color: '#777',
});

const SelectEstado = styled(Select)({
  width: '90%',
  margin: '10px auto 10px auto',
  padding: '0',
  display: 'block',
  borderRadius: '20px',
  color: '#fff',
  background: '#27F49E',
});

const Estados = styled(MenuItem)({
  textAlign: 'center',
  fontSize: '16px',
  background: '#220B39',
  color: '#fff',
  '&:hover': {
    background: '#220B39',
  },
});

const ContainerResumen = styled(Box)({
  width: '75%',
  margin: '0 auto 30px auto',
  textAlign: 'left',
});

const TitleEstadisticas = styled(Typography)({
  fontSize: '20px',
  color: '#fff',
});

const EstadisticaCuenta = styled(Typography)({
  margin: '7px 0',
  fontSize: '15px',
  color: '#777',
});

const Column2 = styled(Box)({
  width: 1200,
});
