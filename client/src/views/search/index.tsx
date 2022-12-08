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
      console.log({ search });
      await fetch('https://nc-backend-production.up.railway.app/api/athlete/search/' + search, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((res) => {
          const json = res.json();
          console.log(json);
          return json;
        })
        .then((res) => {
          console.log({ res });
          setAthletes(res.data);
        })
        .catch(console.error);
    };

    if (searchAthlete && search) getAthleteSearch(search);
    // searchUniversity(search || '')?.then((res) => {
    //   setUniversities(res || []);
    // });
  }, [search, searchAthlete, searchUniversity]);

  console.warn({ athletes, search });
  return (
    <MainContainer>
      <PrincipalContainer>
        {athletes && athletes?.map(() => <CardFilter variation="athlete" />)}
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
}));
