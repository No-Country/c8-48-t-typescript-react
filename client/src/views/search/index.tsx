import { Box, styled, Typography } from '@mui/material';
import { CardFilter } from './components/Cards';
import { ListFilter } from './components/List';

const SearchView = () => {
  // const params = useParams();
  // const search = params?.search;

  return (
    <MainContainer>
      <SideContainer>
        <Typography variant="h4" align="center">
          Universidades
        </Typography>
        <ListFilter title="Pais" elements={[]} />
        <ListFilter
          title="Posición"
          elements={[
            'Arquero (arq)',
            'def lateral derecho (dld)',
            'def Lateral izquierdo (dli)',
            'def central izquierdo (dci)',
            'def central derecho (dcd)',
            'volante izquierdo (vi)',
            'cen volante izquierdo (cvi)',
            'cen volante derecho (cvd)',
            'volante derecho (VD)',
            'delantero izquierdo (di)',
            'delantero derecho (dd)',
          ]}
        />
        <ListFilter title="Ranking" elements={[]} />
        <ListFilter title="Area estudio" elements={[]} />
      </SideContainer>
      <PrincipalContainer>
        <CardFilter variation="athlete" />
        <CardFilter variation="athlete" />
        <CardFilter variation="university" />
        <CardFilter variation="university" />
      </PrincipalContainer>
    </MainContainer>
  );
};

export { SearchView as default };

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '100%',
  width: '100vw',
}));

const SideContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: 344,
  height: '100%',
  backgroundColor: 'white',
  boxSizing: 'border-box',
}));
const PrincipalContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: '100vh',
  width: '100%',
}));
