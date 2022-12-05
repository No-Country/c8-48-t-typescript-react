import { Box, styled, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ListFilter } from './components/List';

const SearchView = () => {
  const params = useParams();
  const search = params?.search;

  return (
    <MainContainer>
      <SideContainer>
        <Typography color="black">Estudiantes</Typography>
        <Typography color="black"></Typography>
        <ListFilter title="hola" elements={['hola']} />
      </SideContainer>
      <PrincipalContainer>
        <Typography color="white">something</Typography>
      </PrincipalContainer>
    </MainContainer>
  );
};

export { SearchView as default };

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  weight: '100vw',
}));

const SideContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: 344,
  height: '100%',
  backgroundColor: 'white',
}));
const PrincipalContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  weight: '100%',
}));
