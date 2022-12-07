import { Box, styled, Typography, Select, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import flag from '../../assets/images/Bandera.png';
import { AthleteData as Athlete } from './index';

const SideBar: React.FC<{ athlete?: Athlete }> = ({ athlete }) => (
  <Box sx={{ mr: 3, py: 3, width: '45vh' }}>
    <InfoAthlete>
      <HeaderInfoAthlete>
        <OriginAthlete>
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <img style={{ width: 50, height: 20, marginLeft: 20 }} src={flag} />
          </div>
          <EditIcon sx={{ color: 'secondary.dark', marginRight: '20px' }} />
        </OriginAthlete>
      </HeaderInfoAthlete>
      <ImgAthlete>
        <img
          style={{ width: '100%', height: 190, margin: 'auto', display: 'block' }}
          src={
            athlete?.user.urlProfile ??
            'https://fcf.com.co/wp-content/uploads/1991/07/James-Rodriguez-2-445x400.png'
          }
        />
      </ImgAthlete>
      <DataAthlete>
        <ContainerData>
          <AthleteData>Edad</AthleteData>
          <AthleteData>Posición</AthleteData>
          <AthleteData>Estudio</AthleteData>
        </ContainerData>
        <ContainerData>
          <DataAthleteNew>{athlete?.age ?? 0}</DataAthleteNew>
          <DataAthleteNew>DELANTERO</DataAthleteNew>
          <DataAthleteNew>ING</DataAthleteNew>
        </ContainerData>
      </DataAthlete>
    </InfoAthlete>
    <Anuncio>
      <AnuncioTitle>¿Buscas una oportunidad?</AnuncioTitle>
      <TextAnuncio>
        MANTENER TU ESTADO ACTUALIZADO TE PERMITIRÁ APARECER EN EL BUSCADOR DE LAS UNIVERSIDADES
      </TextAnuncio>
      <SelectEstado label="Estado">
        <Estados>Buscando</Estados>
        <Estados>Pausado</Estados>
        <Estados>Tramitando</Estados>
        <Estados>Escucho ofertas</Estados>
      </SelectEstado>
    </Anuncio>
    <ContainerResumen>
      <TitleStats>Resumen</TitleStats>
      <StatsAccount>PERFIL ACTUALIZADO 80%</StatsAccount>
      <StatsAccount>SOLICITUDES RECIBIDAS 7</StatsAccount>
      <StatsAccount>SOLICITUDES ENVIADAS 4</StatsAccount>
      <StatsAccount>MIEMBRO DESDE 04/05/22</StatsAccount>
    </ContainerResumen>
  </Box>
);

export default SideBar;

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
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'space-between',
});

const CountryAthlete = styled(Typography)({
  marginLeft: 10,
  fontSize: '1em',
  color: '#fff',
});

const ImgAthlete = styled(Box)({
  width: '85%',
  height: 200,
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

const AthleteData = styled(Typography)({
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

const TitleStats = styled(Typography)({
  fontSize: '20px',
  color: '#fff',
});

const StatsAccount = styled(Typography)({
  margin: '7px 0',
  fontSize: '15px',
  color: '#777',
});
