import { useCallback, useState } from 'react';
import axios from 'axios';
import { rootBackEnd } from '../../constants/links';

const client = axios.create({
  baseURL: rootBackEnd,
});

// Athlete
interface postRegisterUniversity {
  file: string;
  fullName: string;
  email: string;
  password: string;
  idCountry: number;
  linkedin: string;
  website: string;
  description: string;
  acceptConditions: boolean;
}

interface RegisterAthleteData {
  fullName: string;
  email: string;
}

// University

interface postRegisterAthlete {
  fullName: string;
  email: string;
  password: string;
}

export default function useRequestAuth() {
  const [registerAthleteData, setRegisterAthleteData] = useState<RegisterAthleteData>({
    fullName: '',
    email: '',
  });

  //   Register Athlete
  const postRegisterAthlete = useCallback(
    (body: postRegisterAthlete) => {
      client
        .post('api/auth/register/athlete', body)
        .then((res) => {
          setRegisterAthleteData(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log({ error }));
    },
    [setRegisterAthleteData],
  );

  //   Register University
  const postRegisterUniversity = useCallback(
    (body: postRegisterUniversity) => {
      client
        .post('api/auth/register/university', body)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log({ error }));
    },
    [setRegisterAthleteData],
  );

  return {
    postRegisterAthlete,
    postRegisterUniversity,
    registerAthleteData,
  };
}
