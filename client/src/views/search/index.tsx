import { Box, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { errorLogin } from '../../services/alerts';
import useRequestAuth from '../../services/hooks/useRequestAuth';
import { CardFilter } from './components/Cards';

const SearchView = () => {
  const [searchParams] = useSearchParams();
  const { search } = useParams();
  const { searchAthlete, searchUniversity } = useRequestAuth();
  const [athletes, setAthletes] = useState([]);
  const [universities, setUniversities] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      searchParams.delete('search');
      navigate('/');
      errorLogin();
    }
  }, [searchAthlete, searchUniversity]);
  useEffect(() => {
    searchAthlete(search || '')?.then((res) => {
      setAthletes(res || []);
    });
    searchUniversity(search || '')?.then((res) => {
      setUniversities(res || []);
    });
  }, []);
  console.log('file: index.tsx:25  SearchView  universities', universities);

  return (
    <MainContainer>
      {/* <SideContainer>
        <Typography variant="h4" align="center">
          Universidades
        </Typography>
        <ListFilter title="País" elements={[]} />
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
      </SideContainer> */}
      <PrincipalContainer>
        {athletes && athletes?.map(() => <CardFilter variation="athlete" />)}
        {universities &&
          universities?.map(() => <CardFilter variation="university" />)}
      </PrincipalContainer>
    </MainContainer>
  );
};

export { SearchView as default };

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
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
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: '100vh',
  width: '100%',
}));
