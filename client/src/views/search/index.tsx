import { Box, styled } from '@mui/material';
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
    searchAthlete(search || '')?.then((res = []) => {
      setAthletes(res || []);
    });
    searchUniversity(search || '')?.then((res) => {
      setUniversities(res || []);
    });
  }, []);

  return (
    <MainContainer>
      <PrincipalContainer>
        {athletes && athletes?.map(() => <CardFilter variation="athlete" />)}
        {universities && universities?.map(() => <CardFilter variation="university" />)}
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

const PrincipalContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: '100vh',
  width: '100%',
}));
