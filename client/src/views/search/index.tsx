import { Box, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { errorLogin } from '../../services/alerts';
import useRequestAuth from '../../services/hooks/useRequestAuth';
import { AthleteData } from '../AthleteProfile';
import { CardFilter } from './components/Cards';

const SearchView = () => {
  const [searchParams] = useSearchParams();
  const { search } = useParams();
  const { searchAthlete, searchUniversity } = useRequestAuth();
  const [athletes, setAthletes] = useState([]);
  // const [universities, setUniversities] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      searchParams.delete('search');
      navigate('/');
      errorLogin();
    }
  }, []);
  useEffect(() => {
    const getAthleteSearch = async (search = '') => {
      await fetch('https://nc-backend-production.up.railway.app/api/athlete/search/' + search, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((res) => {
          const json = res.json();
          return json;
        })
        .then((res) => {
          setAthletes(res);
        })
        .catch(console.error);
    };

    if (!athletes && search) getAthleteSearch(search);
    // searchUniversity(search || '')?.then((res) => {
    //   setUniversities(res || []);
    // });
  }, [search, searchAthlete, searchUniversity, athletes]);

  return (
    <MainContainer>
      <PrincipalContainer>
        {!!athletes &&
          athletes.map((athlete: AthleteData) => athlete && <CardFilter variation="athlete" />)}
        {/* {universities && universities?.map(() => <CardFilter variation="university" />)} */}
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
  margin: 10,
}));
